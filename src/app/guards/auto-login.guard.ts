import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  constructor(private _authService: AuthService, private _router: Router) {}
  canLoad(): Observable<boolean> {
    return this._authService.userState.pipe(
      filter((val) => val !== null),
      take(1),
      map((user) => {
        if (Object.keys(user).length) {
          this._router.navigateByUrl('/wazen');
          return true;
        } else {
          return true;
        }
      })
    );
  }
}
