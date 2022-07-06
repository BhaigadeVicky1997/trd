import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelPoliciesVerificationComponent } from './cancel-policies-verification/cancel-policies-verification.component';
import { CancelPoliciesVehicleListComponent } from './cancel-policies-vehicle-list/cancel-policies-vehicle-list.component';
import { CancelPoliciesVehicleViewComponent } from './cancel-policies-vehicle-view/cancel-policies-vehicle-view.component';
import { CancelPoliciesReviewComponent } from './cancel-policies-review/cancel-policies-review.component';
import { CancelPoliciesBankDetailsComponent } from './cancel-policies-bank-details/cancel-policies-bank-details.component';
import { CancelPoliciesThankYouComponent } from './cancel-policies-thank-you/cancel-policies-thank-you.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { InternationalizationModule } from 'src/app/utils/internationalization/internationalization.module';
import { CancelPoliciesComponent } from './cancel-policies.component';
import { CancelPoliciesPaymentComponent } from './cancel-policies-payment/cancel-policies-payment.component';

export const routes: Routes = [
  {
    path: '',
    component: CancelPoliciesComponent,
    children: [
      { path: 'verification', component: CancelPoliciesVerificationComponent },
      { path: 'vehicle-list', component: CancelPoliciesVehicleListComponent },
      { path: 'vehicle-view', component: CancelPoliciesVehicleViewComponent },
      { path: 'review', component: CancelPoliciesReviewComponent },
      { path: 'bank-details', component: CancelPoliciesBankDetailsComponent },
      { path: 'payment', component: CancelPoliciesPaymentComponent },
      { path: 'thank-you', component: CancelPoliciesThankYouComponent },

      {
        path: '',
        redirectTo: 'verification',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    CancelPoliciesVerificationComponent,
    CancelPoliciesVehicleListComponent,
    CancelPoliciesVehicleViewComponent,
    CancelPoliciesReviewComponent,
    CancelPoliciesBankDetailsComponent,
    CancelPoliciesThankYouComponent,
    CancelPoliciesComponent,
    CancelPoliciesPaymentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    InternationalizationModule.forRoot({ locale_id: 'en-US' }),
  ]
})
export class CancelPoliciesModule { }


