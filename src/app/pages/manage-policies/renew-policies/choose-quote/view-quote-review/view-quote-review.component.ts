import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-quote-review',
  templateUrl: './view-quote-review.component.html',
  styleUrls: ['./view-quote-review.component.scss']
})
export class ViewQuoteReviewComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  getPayment(){
    this._router.navigateByUrl('/wazen/manage-policies/renew-policies-tabs/payment/bank-payment');
  }

}
