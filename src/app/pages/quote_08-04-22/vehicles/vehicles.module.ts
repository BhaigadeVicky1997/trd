import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { GetQuotevehicleListComponent } from './get-quote-vehicle-list/get-quote-vehicle-list.component';
import { GetQuotevehicleViewComponent } from './get-quote-vehicle-view/get-quote-vehicle-view.component';
import { GetQuoteVerificationComponent } from './get-quote-verification/get-quote-verification.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiclesComponent } from './vehicles.component';
import { SharedDirectivesModule } from 'src/app/utils/directives/shared-directives.module';
import ar_dz from '@angular/common/locales/ar-DZ';
import { registerLocaleData } from '@angular/common';
import { InternationalizationModule } from 'src/app/utils/internationalization/internationalization.module';
import { DashboardService } from 'src/app/services/dashboard.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  DateTimeAdapter,
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_FORMATS,
} from 'ng-pick-datetime';
import { ReviewCancelPolicyComponent } from './review-cancel-policy/review-cancel-policy.component';

registerLocaleData(ar_dz);

export const MY_NATIVE_FORMATS = {
  fullPickerInput: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
  datePickerInput: { year: 'numeric', month: 'long', day: 'numeric' },
  timePickerInput: { hour: 'numeric', minute: 'numeric' },
  monthYearLabel: { year: 'numeric', month: 'short' },
  dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
  monthYearA11yLabel: { year: 'numeric', month: 'long' },
};


const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      {
        path: 'get-quote',
        component: GetQuoteComponent,
        data: {
          parent: 'Get-Quote',
          title: 'Get-Quote',
        },
      },
      {
        path: 'get-quote-verification',
        component: GetQuoteVerificationComponent,
        data: {
          parent: 'Get Quote Verification',
          title: 'Get Quote Verification',
        },
      },
      {
        path: 'get-quote-verification/:Id/:dob',
        component: GetQuoteVerificationComponent,
        data: {
          parent: 'Get Quote Verification',
          title: 'Get Quote Verification',
        },
      },
      {
        path: 'verification',
        component: GetQuoteVerificationComponent,
        data: {
          parent: 'Get Quote Verification',
          title: 'Get Quote Verification',
        },
      },
      {
        path: 'vehicles',
        component: GetQuotevehicleListComponent,
        data: {
          parent: 'Get Quote vehicle List',
          title: 'Get Quote vehicle List',
        },
      },
      {
        path: 'vehicles/:Id',
        component: GetQuotevehicleListComponent,
        data: {
          parent: 'Get Quote vehicle List',
          title: 'Get Quote vehicle List',
        },
      },
      {
        path: 'get-quote-vehicle-details/:Id',
        component: GetQuotevehicleViewComponent,
        data: {
          parent: 'Get Quote Vehicle Details',
          title: 'Get Quote Vehicle Details',
        },
      },
      {
        path: 'review-policy',
        component: ReviewCancelPolicyComponent,
        data: {
          parent: 'Get Quote Vehicle Details',
          title: 'Get Quote Vehicle Details',
        },
      },
      {
        path: '',
        redirectTo: 'get-quote',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    VehiclesComponent,
    GetQuoteComponent,
    GetQuotevehicleListComponent,
    GetQuotevehicleViewComponent,
    GetQuoteVerificationComponent,
    ReviewCancelPolicyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedDirectivesModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    NgxSpinnerModule,

  ],
  exports: [],
  providers: [
    DashboardService,
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS },
  ],
})
export class VehiclesModule {}
