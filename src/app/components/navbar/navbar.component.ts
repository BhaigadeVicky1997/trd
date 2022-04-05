import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LocalizationConfigService } from 'src/app/utils/internationalization/localization-config.service';
import { LocalizationService } from 'src/app/utils/internationalization/localization.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/wazen/dashboard',
    title: 'Dashboard',
    icon: 'design_app',
    class: '',
  },
  {
    path: '/wazen/roles',
    title: 'Roles',
    icon: 'design_app',
    class: '',
  },
  {
    path: '/wazen/add-role',
    title: 'Add roles',
    icon: 'design_app',
    class: '',
  },
  {
    path: '/wazen/student',
    title: 'Students',
    icon: 'design_app',
    class: '',
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
/** navbar component*/
export class NavbarComponent implements OnInit {
  /** navbar ctor */
  menuItems: any[];
  language: string = 'EN';
  user: string = '';

  constructor(
    private _localizationService: LocalizationService,
    private _authService: AuthService
  ) {
    this._authService.userState.subscribe((res: any) => {
      if (Object.keys(res).length) {
        this.user = res.username;
      } else {
        this.user = '';
      }
    });
  }

  changeLanguage() {
    let currentLang = localStorage.getItem('language');
    let changedLang = currentLang == 'en-US' ? 'ar-DR' : 'en-US';
    localStorage.setItem('language', changedLang);
    this.language = changedLang == 'ar-DR' ? 'EN' : 'عربي';
    this._localizationService.initService();
  }

  //async getMenus() {
  //  this._authService.getMenus().subscribe((menus: any) => {
  //    let userMenu = menus.result;
  //    ROUTES.push(...userMenu);
  //    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  //  });
  //}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    let currentLang = localStorage.getItem('language') || 'en-US';
    this.language = currentLang == 'ar-DR' ? 'EN' : 'عربي';

    //this.getMenus();
  }
}
