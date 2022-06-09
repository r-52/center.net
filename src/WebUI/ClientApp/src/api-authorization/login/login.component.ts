import { Component, OnInit } from '@angular/core';
import {
  AuthorizeService,
  AuthenticationResultStatus,
} from '../authorize.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {
  LoginActions,
  QueryParameterNames,
  ApplicationPaths,
  ReturnUrlType,
} from '../api-authorization.constants';

// The main responsibility of this component is to handle the user's login process.
// This is the starting point for the login process. Any component that needs to authenticate
// a user can simply perform a redirect to this component with a returnUrl query parameter and
// let the component perform the login and return back to the return url.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public message = new BehaviorSubject<string | null | undefined>(null);

  public constructor(
    private _authorizeService: AuthorizeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  public async ngOnInit() {
    const action = this._activatedRoute.snapshot.url[1];
    switch (action.path) {
      case LoginActions.Login:
        await this._login(this._getReturnUrl());
        break;
      case LoginActions.LoginCallback:
        await this._processLoginCallback();
        break;
      case LoginActions.LoginFailed:
        const message = this._activatedRoute.snapshot.queryParamMap.get(
          QueryParameterNames.Message
        );
        this.message.next(message);
        break;
      case LoginActions.Profile:
        this._redirectToProfile();
        break;
      case LoginActions.Register:
        this._redirectToRegister();
        break;
      default:
        throw new Error(`Invalid action '${action}'`);
    }
  }

  private async _login(returnUrl: string): Promise<void> {
    const state: INavigationState = { returnUrl };
    const result = await this._authorizeService.signIn(state);
    this.message.next(undefined);
    switch (result.status) {
      case AuthenticationResultStatus.Redirect:
        break;
      case AuthenticationResultStatus.Success:
        await this._navigateToReturnUrl(returnUrl);
        break;
      case AuthenticationResultStatus.Fail:
        await this._router.navigate(
          ApplicationPaths.LoginFailedPathComponents,
          {
            queryParams: { [QueryParameterNames.Message]: result.message },
          }
        );
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        throw new Error(`Invalid status result ${(result as any).status}.`);
    }
  }

  private async _processLoginCallback(): Promise<void> {
    const url = window.location.href;
    const result = await this._authorizeService.completeSignIn(url);
    switch (result.status) {
      case AuthenticationResultStatus.Redirect:
        // There should not be any redirects as completeSignIn never redirects.
        throw new Error('Should not redirect.');
      case AuthenticationResultStatus.Success:
        await this._navigateToReturnUrl(this._getReturnUrl(result.state));
        break;
      case AuthenticationResultStatus.Fail:
        this.message.next(result.message);
        break;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _redirectToRegister(): any {
    this._redirectToApiAuthorizationPath(
      `${ApplicationPaths.IdentityRegisterPath}?returnUrl=${encodeURI(
        '/' + ApplicationPaths.Login
      )}`
    );
  }

  private _redirectToProfile(): void {
    this._redirectToApiAuthorizationPath(ApplicationPaths.IdentityManagePath);
  }

  private async _navigateToReturnUrl(returnUrl: string) {
    // It's important that we do a replace here so that we remove the callback uri with the
    // fragment containing the tokens from the browser history.
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
      (state && state.returnUrl) ||
      fromQuery ||
      ApplicationPaths.DefaultLoginRedirectPath
    );
  }

  private _redirectToApiAuthorizationPath(apiAuthorizationPath: string) {
    // It's important that we do a replace here so that when the user hits the back arrow on the
    // browser they get sent back to where it was on the app instead of to an endpoint on this
    // component.
    const redirectUrl = `${window.location.origin}/${apiAuthorizationPath}`;
    window.location.replace(redirectUrl);
  }
}

interface INavigationState {
  [ReturnUrlType]: string;
}
