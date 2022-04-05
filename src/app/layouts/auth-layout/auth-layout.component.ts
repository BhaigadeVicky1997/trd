import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
})
/** auth-layout component*/
export class AuthLayoutComponent {
  /** auth-layout ctor */
  title: string = 'Sign In';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    // let events = this._router.events;
    // events
    //   .pipe(
    //     filter((evt) => evt instanceof NavigationEnd),
    //     map(() => {
    //       return this._router.url;
    //     })
    //   )
    //   .subscribe((page) => {
    //     let childPage: any = page.split('authentication/')[1];
    //     this.title = this._activatedRoute.snapshot.routeConfig.children.find(
    //       (x) => x.path == childPage.split('?')[0]
    //     ).data.title;
    //   });
  }
}
