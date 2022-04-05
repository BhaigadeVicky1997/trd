import { Attribute, Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControlName, Validators } from '@angular/forms';
import { DateTimeAdapter } from 'ng-pick-datetime';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[changeDatepickerFormat]',
})
export class DatepickerFormatDirective implements OnInit, OnDestroy {
  valueSub: Subscription;

  constructor(
    private el: ElementRef,
    private formControlName: FormControlName, // Inject FormControlName
    private _dateTimeAdapter: DateTimeAdapter<Date>,
    @Attribute('changeDatepickerFormat') public pickerName: string,
  ) {}

  ngOnInit() {
    // Listen value changes
    this.valueSub = this.formControlName.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        // Get label
        let type = value.trim();
        if (type && type.length == 1) {
          if (type.startsWith('1')) {
            this._dateTimeAdapter.setLocale('ar-DZ');
            console.log(this.writeHijri());
            
            // this._dateTimeAdapter.format(this.formControlName.control.value, "MM/DD/YYYY");
            this.formControlName.control.parent.controls[this.pickerName]//.addValidators(Validators.required);
          } else if (type.startsWith('2')) {
            this._dateTimeAdapter.setLocale('en-US');
            // this.formControlName.control.addValidators(Validators.required);
          } else if (type.startsWith('7')) {
            // this.formControlName.control.clearValidators();
          }
          // this.formControlName.control.updateValueAndValidity();
        }
      });
  }

  ngOnDestroy() {
    // Unlisten value changes
    this.valueSub.unsubscribe();
  }
  writeHijri(date?, lang?) {
    var date = date || new Date();
    lang = lang || 'en';
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleString(lang + '-u-ca-islamic', options);
  }
}
