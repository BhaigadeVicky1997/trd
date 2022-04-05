import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimReviewComponent } from './claim-review.component';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ClaimReviewService } from 'src/app/services/claim-review.service';

const routes: Routes = [
  {
    path: '',
    component: ClaimReviewComponent,
    children: [
      {
        path: '',
        component: ReviewComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: 'payment',
        component: PaymentComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: 'thankyou',
        component: ThankyouComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
    ],
  },
];

@NgModule({
  declarations: [
    ClaimReviewComponent,
    ReviewComponent,
    PaymentComponent,
    ThankyouComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ClaimReviewService]
})
export class ClaimReviewModule {}
