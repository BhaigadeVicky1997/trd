import { Router } from '@angular/router';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-pay-payment',
  templateUrl: './pay-payment.component.html',
  styleUrls: ['./pay-payment.component.scss'],
})
export class PayPaymentComponent implements OnInit {
  @ViewChild('legalAgreementPopup') legalAgreementPopup: ElementRef;
  @ViewChild('getQuoteBackdrop') getQuoteBackdrop: ElementRef;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  openLegalAgreement() {
    this.legalAgreementPopup.nativeElement.style.display = 'block';
    this.getQuoteBackdrop.nativeElement.classList.add('active');
    window.scrollTo(0, 0);
  }
  closeLegalAgreement() {
    this.legalAgreementPopup.nativeElement.style.display = 'none';
    this.getQuoteBackdrop.nativeElement.classList.remove('active');
    window.scrollTo(0, 0);
  }
  onContinuePayment() {
    this._router.navigateByUrl('wazen/quotes/payment/thank-you');
  }
}
