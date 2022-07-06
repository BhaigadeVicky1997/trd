import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-policies-review',
  templateUrl: './cancel-policies-review.component.html',
  styleUrls: ['./cancel-policies-review.component.scss']
})
export class CancelPoliciesReviewComponent implements OnInit {

  constructor(
    private _router:Router,
  ) { }

  ngOnInit(): void {
  }

  confirm(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/cancel-policies-tabs/bank-details'
    )
  }

}
