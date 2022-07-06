import { UpgradePaymentComponent } from './upgrade-payment.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankPaymentComponent } from './bank-payment/bank-payment.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes:Routes = [
  {
    path:'',
    component:UpgradePaymentComponent,
    children : [
      {
        path:'card-details',
        component:CardDetailsComponent
      },
      {
        path: 'bank-payment',
        component:BankPaymentComponent
      },
      {
        path: 'thank-you',
        component:ThankYouComponent
      },
      {
        path:'',
        redirectTo:'card-details',
        pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    BankPaymentComponent,
    CardDetailsComponent,
    UpgradePaymentComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpgradePaymentModule { }
