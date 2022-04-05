import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private _router: Router, private _paymentService: PaymentService) { }

  ngOnInit(): void {
  }


  getInvoice() {
    this._paymentService.getInvoice().subscribe((res: any) => {
      if (res.succeeded) {
        this.dowloadInvoice(res.data.getBase64);
      }
    })
  }
  dowloadInvoice(invoice) {
    var a = document.createElement("a"); //Create <a>
    a.href = invoice; //Image Base64 Goes here
    a.download = "invoice.pdf"; //File name Here
    a.click(); //Downloaded file
  }

}
