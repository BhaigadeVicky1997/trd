import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-upgrade-policies-tabs',
  templateUrl: './upgrade-policies-tabs.component.html',
  styleUrls: ['./upgrade-policies-tabs.component.scss']
})
export class UpgradePoliciesTabsComponent implements OnInit {

  tabs: any[] = [
    {
      step: 1,
      name: 'Select Policy',
      url: '/wazen/manage-policies/upgrade-policies-tabs/vehicle',
    },
    {
      step: 2,
      name: 'Choose a Quote',
      url: '/wazen/manage-policies/upgrade-policies-tabs/choose-quote',
    },
    {
      step: 3,
      name: 'Review & Pay',
      url: '/wazen/manage-policies/upgrade-policies-tabs/payment',
    },
  ];
  currentTab: number = 0;
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let tab = this.tabs.find((x) => e.url.startsWith(x.url));
        if (tab) this.currentTab = tab.step - 1;
      }
    });
  }

}
