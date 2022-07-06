import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-bank',
  templateUrl: './review-bank.component.html',
  styleUrls: ['./review-bank.component.scss']
})
export class ReviewBankComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  getReviewConfirm(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/add-delete-tabs/review/review-confirm'
    );
  }

}
