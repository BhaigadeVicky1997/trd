import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-quote-tabs',
  templateUrl: './quote-tabs.component.html',
  styleUrls: ['./quote-tabs.component.scss'],
})
export class QuoteTabsComponent implements OnInit {
  tabs: any[] = [
    {
      step: 1,
      name: 'Vehicle Details',
      url: '/wazen/quotes/vehicles',
    },
    {
      step: 2,
      name: 'Choose a Quote',
      url: '/wazen/quotes/choose-quotes',
    },
    {
      step: 3,
      name: 'Review & Pay',
      url: '/wazen/quotes/payment',
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
