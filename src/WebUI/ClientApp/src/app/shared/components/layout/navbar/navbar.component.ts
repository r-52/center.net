import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends BaseComponent implements OnInit {
  @ViewChild(MatSidenav)
  public sideNav!: MatSidenav;

  @Input()
  public isNavbarOpen: boolean = false;

  public mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  public constructor(
    private readonly _changeDetectorRef: ChangeDetectorRef,
    private readonly _media: MediaMatcher
  ) {
    super();
    this.mobileQuery = _media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => _changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public onToggleSidebar(): void {
    this.sideNav.toggle();
  }
}
