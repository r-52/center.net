import { Component, OnInit } from '@angular/core';
import {
  AuthenticationResultStatus,
  AuthorizeService,
} from '../authorize.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import {
  LogoutActions,
  ApplicationPaths,
  ReturnUrlType,
} from '../api-authorization.constants';

// The main responsibility of this component is to handle the user's logout process.
// This is the starting point for the logout process, which is usually initiated when a
// user clicks on the logout button on the LoginMenu component.
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  public message = new BehaviorSubject<string | null>(null);

  public constructor(
    private _authorizeService: AuthorizeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  public async ngOnInit() {
    const action = this._activatedRoute.snapshot.url[1];
    switch (action.path) {
      case LogoutActions.Logout:
        if (!!window.history.state.local) {
          await this._logout(this._getReturnUrl());
        } else {
          // This prevents regular links to <app>/authentication/logout from triggering a logout
          this.message.next(
            'The logout was not initiated from within the page.'
          );
        }

        break;
      case LogoutActions.LogoutCallback:
        await this._processLogoutCallback();
        break;
      case LogoutActions.LoggedOut:
        this.message.next('You successfully logged out!');
        break;
      default:
        throw new Error(`Invalid action '${action}'`);
    }
  }

  private async _logout(returnUrl: string): Promise<void> {
    const state: INavigationState = { returnUrl };
    const isAuthenticated = await this._authorizeService
      .isAuthenticated()
      .pipe(take(1))
      .toPromise();
    if (isAuthenticated) {
      const result = await this._authorizeService.signOut(state);
      switch (result.status) {
        case AuthenticationResultStatus.Redirect:
          break;
        case AuthenticationResultStatus.Success:
          await this._navigateToReturnUrl(returnUrl);
          break;
        case AuthenticationResultStatus.Fail:
          this.message.next(result.message);
          break;
        default:
          throw new Error('Invalid authentication result status.');
      }
    } else {
      this.message.next('You successfully logged out!');
    }
  }

  private async _processLogoutCallback(): Promise<void> {
    const url = window.location.href;
    const result = await this._authorizeService.completeSignOut(url);
    switch (result.status) {
      case AuthenticationResultStatus.Redirect:
        // There should not be any redirects as the only time completeAuthentication finishes
        // is when we are doing a redirect sign in flow.
        throw new Error('Should not redirect.');
      case AuthenticationResultStatus.Success:
        await this._navigateToReturnUrl(this._getReturnUrl(result.state));
        break;
      case AuthenticationResultStatus.Fail:
        this.message.next(result.message);
        break;
      default:
        throw new Error('Invalid authentication result status.');
    }
  }

  private async _navigateToReturnUrl(returnUrl: string) {
    await this._router.navigateByUrl(returnUrl, {
      replaceUrl: true,
    });
  }

  private _getReturnUrl(state?: INavigationState): string {
    const fromQuery = (
      this._activatedRoute.snapshot.queryParams as INavigationState
    ).returnUrl;
    // If the url is coming from the query string, check that is either
    // a relative url or an absolute url
    if (
      fromQuery &&
      !(
        fromQuery.startsWith(`${window.location.origin}/`) ||
        /\/[^\/].*/.test(fromQuery)
      )
    ) {
      // This is an extra check to prevent open redirects.
      throw new Error(
        'Invalid return url. The return url needs to have the same origin as the current page.'
      );
    }
    return (
      (state && state.returnUrl) || fromQuery || ApplicationPaths.LoggedOut
    );
  }
}

interface INavigationState {
  [ReturnUrlType]: string;
}
