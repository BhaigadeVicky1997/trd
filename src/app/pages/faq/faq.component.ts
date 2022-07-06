import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFaq, IFaqsResponse } from 'src/app/models/IFaq';
import { FaqService } from 'src/app/services/faq.service';
declare var $: any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  Faqs: IFaq[] = [];
  url: string;
  constructor(private _router: Router, private _faqService: FaqService) {
    
  }

  ngOnInit(): void {
    this.url = this._router.url;
    //this.initJquery();
    this.getFaqs();
  }

  getFaqs() {
    this._faqService.getFaqs().subscribe(
      (res: IFaqsResponse) => {
        if (res.succeeded) {
          this.Faqs = res.data;
          console.log("FAQs", this.Faqs);
          // console.log("FAQs1", this.Faqs[0]);
          // console.log("FAQs2", this.Faqs[0].faqs);
        }
      },
    );
  }

  initJquery() {
    $('.nested-accordion').find('.comment').slideUp();
    $('.nested-accordion')
      .find('h3')
      .click(function () {
        $(this).next('.comment').slideToggle(100);
        $(this).toggleClass('selected');
      });
  }
}
