import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from './authorize.service';
import { tap } from 'rxjs/operators';
import {
  ApplicationPaths,
  QueryParameterNames,
} from './api-authorization.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  public constructor(
    private _authorize: AuthorizeService,
    private _router: Router
  ) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._authorize
      .isAuthenticated()
      .pipe(
        tap((isAuthenticated) =>
          this._handleAuthorization(isAuthenticated, state)
        )
      );
  }

  private _handleAuthorization(
    isAuthenticated: boolean,
    state: RouterStateSnapshot
  ) {
    if (!isAuthenticated) {
      this._router.navigate(ApplicationPaths.LoginPathComponents, {
        queryParams: {
          [QueryParameterNames.ReturnUrl]: state.url,
        },
      });
    }
  }
}
