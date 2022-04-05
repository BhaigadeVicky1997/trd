import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanLoad,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivateChild {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot) {
    const expectedRole = childRoute.data.role;
    return this._authService.userState.pipe(
      filter((val) => val !== null),
      take(1),
      map((user: any) => {
        if (
          Object.keys(user).length &&
          ((expectedRole && user.role == expectedRole) || !expectedRole)
        ) {
          return true;
        } else {
          this._router.navigateByUrl('/wazen/dashboard');
          return false;
        }
      })
    );
  }
  canLoad(): Observable<boolean> {
    return this._authService.userState.pipe(
      filter((val) => val !== null),
      take(1),
      map((user) => {
        if (Object.keys(user).length) {
          return true;
        } else {
          this._router.navigateByUrl('/wazen/dashboard');
          return false;
        }
      })
    );
  }
}
