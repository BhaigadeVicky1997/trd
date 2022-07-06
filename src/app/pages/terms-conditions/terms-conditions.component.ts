import { Component, OnInit } from '@angular/core';
import { ITermsAndConditions, ITermsAndConditionsResponse } from 'src/app/models/ITermsAndConditions';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  selectedTab: number = 0;
  terms: ITermsAndConditions[] = [];

  constructor(private _termsService: ContactUsService) { }

  ngOnInit(): void {
    this.getTerms();
  }

  getTerms() {
    this._termsService.getTerms().subscribe(
      (res: ITermsAndConditionsResponse) => {
        if (res.succeeded) {
          this.terms = res.data;
          console.log("terms", this.terms);
        }
      },
    );
  }

}
