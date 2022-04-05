import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-quote-request',
  templateUrl: './view-quote-request.component.html',
  styleUrls: ['./view-quote-request.component.scss']
})
export class ViewQuoteRequestComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  goReview(){
    this._router.navigateByUrl(
      '/wazen/manage-policies/upgrade-policies-tabs/choose-quote/view-quote-review'
    );
  }

}
