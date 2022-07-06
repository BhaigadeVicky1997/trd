import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-policies-payment',
  templateUrl: './cancel-policies-payment.component.html',
  styleUrls: ['./cancel-policies-payment.component.scss']
})
export class CancelPoliciesPaymentComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  goToThankyou(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/cancel-policies-tabs/thank-you'
    )
  }

}
