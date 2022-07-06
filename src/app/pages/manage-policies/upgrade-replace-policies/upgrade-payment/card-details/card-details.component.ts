import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  cardDetailsDisplay:boolean =true;
  cardLegalDisplay:boolean = false;

  ngOnInit(): void {
  }

  continueTolegal(){
    this.cardDetailsDisplay=false;
    this.cardLegalDisplay= true;
  }

  goBankPayment(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/upgrade-policies-tabs/payment/bank-payment'
    );
  }

}
