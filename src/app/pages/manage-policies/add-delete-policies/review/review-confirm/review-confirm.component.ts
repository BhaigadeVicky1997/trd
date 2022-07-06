import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.scss']
})
export class ReviewConfirmComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  getCheckout(){

    this._router.navigateByUrl(
    '/wazen/manage-policies/add-delete-tabs/payment/bank-payment'
  );
  }

}
