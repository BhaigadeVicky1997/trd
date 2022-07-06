import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add-delete-tabs',
  templateUrl: './add-delete-tabs.component.html',
  styleUrls: ['./add-delete-tabs.component.scss']
})
export class AddDeleteTabsComponent implements OnInit {

  tabs: any[] = [
    {
      step: 1,
      name: 'Vehicle Details',
      url: '/wazen/manage-policies/add-delete-tabs/vehicles',
    },
    {
      step: 2,
      name: 'Review',
      url: '/wazen/manage-policies/add-delete-tabs/review',
    },
    {
      step: 3,
      name: 'Payment',
      url: '/wazen/manage-policies/add-delete-tabs/payment',
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
