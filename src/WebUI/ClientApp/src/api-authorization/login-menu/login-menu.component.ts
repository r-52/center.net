import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated?: Observable<boolean>;
  public userName?: Observable<string | null | undefined>;

  public constructor(private _authorizeService: AuthorizeService) {}

  public ngOnInit() {
    this.isAuthenticated = this._authorizeService.isAuthenticated();
    this.userName = this._authorizeService
      .getUser()
      .pipe(map((u) => u && u.name));
  }
}
