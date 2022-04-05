import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.scss'],
})
export class SubmitClaimComponent implements OnInit {
  tabs: any[] = [
    {
      step: 1,
      name: 'Claim Details',
      url: ['/wazen/claim/own/details', '/wazen/claim/third/details'],
    },
    {
      step: 2,
      name: 'Claim Reference',
      url: ['/wazen/claim/own/reference', '/wazen/claim/third/reference'],
    },
    {
      step: 3,
      name: 'Review & Submit',
      url: ['/wazen/claim/own/review', '/wazen/claim/third/review'],
    },
  ];
  currentTab: number = 0;
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        let tab = this.tabs.find((x) =>
          x.url.find((url: any) => e.url.startsWith(url))
        );
        if (tab) {
          this.currentTab = tab.step - 1;
          console.log(this.currentTab);
        }
      }
    });
    console.log(this.currentTab);
  }
}
