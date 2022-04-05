import { NgModule } from '@angular/core';
import { ConfirmPasswordValidator } from './confirm-password.directive';
import { PasswordToggleDirective } from './password-toggle.directive';
import { ValidatorClassDirective } from './validator-class.directive';
import { DatepickerFormatDirective } from './datepicker-format.directive';
import { registerLocaleData } from '@angular/common';
import ar_dz from '@angular/common/locales/ar-DZ';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule,
  OWL_DATE_TIME_FORMATS,
} from 'ng-pick-datetime';
import { IncrementDecrementDirective } from './increment-decrement.directive';
registerLocaleData(ar_dz);

export const MY_CUSTOM_FORMATS = {
  parseInput: 'LL LT',
  fullPickerInput: 'LL LT',
  datePickerInput: 'LL',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@NgModule({
  imports: [OwlDateTimeModule, OwlNativeDateTimeModule],
  declarations: [
    ConfirmPasswordValidator,
    ValidatorClassDirective,
    PasswordToggleDirective,
    DatepickerFormatDirective,
    IncrementDecrementDirective,
  ],
  exports: [
    ConfirmPasswordValidator,
    ValidatorClassDirective,
    PasswordToggleDirective,
    DatepickerFormatDirective,
    IncrementDecrementDirective
  ],
  providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS }],
})
export class SharedDirectivesModule {}
