import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-policies-bank-details',
  templateUrl: './cancel-policies-bank-details.component.html',
  styleUrls: ['./cancel-policies-bank-details.component.scss']
})
export class CancelPoliciesBankDetailsComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  displayBank:boolean = true;
  displayVerification:boolean = false;


  ngOnInit(): void {
  }

  showVerifyOTP(){
    this.displayBank = false;
    this.displayVerification = true;
  }

  verifyotp(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/cancel-policies-tabs/payment'
    )
  }

}
