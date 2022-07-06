import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  getThankYou(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/add-delete-tabs/payment/thank-you'
    );
  }

}
