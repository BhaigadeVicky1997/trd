import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PayPaymentComponent } from './pay-payment/pay-payment.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'payment',
    component: PayPaymentComponent,
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
  },
  {
    path: '',
    redirectTo: 'payment',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [ThankYouComponent, PayPaymentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ThankYouComponent, PayPaymentComponent],
})
export class PaymentModule {}
