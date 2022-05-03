import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { PolicyService } from 'src/app/services/policy.service';
import { QuoteService } from 'src/app/services/quote.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-review-cancel-policy',
  templateUrl: './review-cancel-policy.component.html',
  styles: [],
})
export class ReviewCancelPolicyComponent implements OnInit {
  vehicleDetails: any[] = [];
  constructor(
    private _globalService: GlobalService,
    private _quoteService: QuoteService,
    private _sharedUtils: SharedUtils,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.vehicleDetails = this._globalService.cancelVehicleDetails.value;
  }

  confirm() {
    this._sharedUtils.showSpinner();
    this._quoteService.sendMailToIc(0).subscribe((response) => {
      this._sharedUtils.showToast(response.message, 1);
      this._sharedUtils.hideSpinner();
      this._router.navigateByUrl('/');
    });
  }
}
