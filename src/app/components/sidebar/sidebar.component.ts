import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedUtils } from '../../utils/shared-utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
/** sidebar component*/
export class SidebarComponent {
  /** sidebar ctor */
  user: string = '';
  constructor(
    private _sharedUtils: SharedUtils,
    private _authService: AuthService
  ) {
    this._authService.userState.subscribe((res: any) => {
      if (Object.keys(res).length) {
        this.user = res.username;
        console.log("full name", res);
      } else {
        this.user = '';
      }
    });
  }

  onSignout() {
    this._authService.logout();
  }
}
