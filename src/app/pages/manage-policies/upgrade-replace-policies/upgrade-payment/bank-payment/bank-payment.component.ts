import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-payment',
  templateUrl: './bank-payment.component.html',
  styleUrls: ['./bank-payment.component.scss']
})
export class BankPaymentComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  gothankyou(){
    this._router.navigateByUrl(
      'wazen/manage-policies/upgrade-policies-tabs/payment/thank-you'
    );

  }

}
