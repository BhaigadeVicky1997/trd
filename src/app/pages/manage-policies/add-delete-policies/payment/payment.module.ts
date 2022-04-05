import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';

const routes:Routes = [
  {
    path:'',
    component: PaymentComponent,
    children:[
      {
        path:'bank-payment',
        component: BankPaymentComponent
      },
      {
        path:'thank-you',
        component:ThankYouComponent
      },
      {
        path:'',
        component:BankPaymentComponent,
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    BankPaymentComponent,
    ThankYouComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [BankPaymentComponent,ThankYouComponent],
})
export class PaymentModule { }
