import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { QuoteService } from 'src/app/services/quote.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-review-features',
  templateUrl: './review-features.component.html',
  styles: [],
})
export class ReviewFeaturesComponent implements OnInit {
  constructor(
    private _globalService: GlobalService,
    private _quoteService: QuoteService,
    private _sharedUtils: SharedUtils,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  confirm() {
    this._sharedUtils.showSpinner();
    this._quoteService.sendMailToIc(1).subscribe((response) => {
      this._sharedUtils.hideSpinner();
      this._sharedUtils.showToast(response.message, 1);
      this._router.navigateByUrl('/');
    });
  }
}
