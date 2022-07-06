import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim-tracking',
  templateUrl: './claim-tracking.component.html',
  styleUrls: ['./claim-tracking.component.scss'],
  host: {
    class: 'tab-pane fade',
    id: 'claim-tracking',
    role: 'tabpanel',
    'aria-labelledby': 'claim-tab',
  },
})
export class ClaimTrackingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
