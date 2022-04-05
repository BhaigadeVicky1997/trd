import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private _router: Router, private readonly _route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onContinue() {
    this._router.navigate(['../thankyou'], { relativeTo: this._route });
  }
}
