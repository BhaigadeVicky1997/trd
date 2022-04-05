import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { InternationalizationModule } from '../../utils/internationalization/internationalization.module';
import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedDirectivesModule } from 'src/app/utils/directives/shared-directives.module';
import ar_dz from '@angular/common/locales/ar-DZ';

import {
  DateTimeAdapter,
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_FORMATS,
} from 'ng-pick-datetime';
import { registerLocaleData } from '@angular/common';

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

export const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    NgxSpinnerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedDirectivesModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [DashboardComponent],
  exports: [],
  providers: [
    DashboardService,
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS },
  ],
})
export class DashboardModule {}
