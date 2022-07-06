import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DateTimeAdapter } from 'ng-pick-datetime';
import * as moment from 'moment';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SharedUtils } from 'src/app/utils/shared-utils';
import { QuoteService } from 'src/app/services/quote.service';


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss'],
})
export class GetQuoteComponent implements OnInit {
  constructor(private _router: Router,
    private _formBuilder: FormBuilder,
    private _dateTimeAdapter: DateTimeAdapter<any>,
    private _quoteService: QuoteService,
    public sharedUtils: SharedUtils
    ){}
  getQuoteForm: FormGroup;
  isSubmitted: boolean = false;
  maxDate: Date = new Date();
  loader: boolean = true;

  async ngOnInit(){
    this.getQuoteForm = this._formBuilder.group({
      nationalId: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
    });
    this.changeCalendar();
  }

  getQuoteVerification() {
    this.isSubmitted = true;
    console.log(
      moment(this.getQuoteForm.value.dateOfBirth).format('YYYY-M-D')
    );

    this.sharedUtils.showSpinner();
    this._quoteService.getOtpByNationalId(this.getQuoteForm.value.nationalId, moment(this.getQuoteForm.value.dateOfBirth).format('YYYY-M-D')).subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          localStorage.setItem('tempCustomer_ID', res.data.customerID);
          this._router.navigateByUrl(
            '/wazen/quotes/vehicles/get-quote-verification/' +
            this.getQuoteForm.value.nationalId +
            '/' +
            moment(this.getQuoteForm.value.dateOfBirth).format('YYYY-M-D')
          );
          this.isSubmitted = false;
          setTimeout(() => {
            this.sharedUtils.showToast(
              'OTP is send to your mobile or email id',
              '1'
            );
            this.sharedUtils.hideSpinner();

            this.loader = false;
          }, 2000);
        }
      },
      (err: any) => {
        setTimeout(() => {
          this.sharedUtils.showToast(
            'Please Enter correct National Id & Date Of Birth..',
            '0'
          );
          this.sharedUtils.hideSpinner();
          this.loader = false;
        }, 1000);
      }
    );


  }

  changeCalendar() {
    this.getQuoteForm.controls['nationalId'].valueChanges.subscribe((value) => {
      let type = value.trim();
      if (type.startsWith('1')) {
        this._dateTimeAdapter.setLocale('en-u-ca-islamic');
        // this._dateTimeAdapter.format()
        // this._dateTimeAdapter.format(
        //   this.getQuoteForm.controls['dateOfBirth'].value,
        //   'MM/DD/YYYY'
        // );
        this.getQuoteForm.controls['dateOfBirth'].addValidators(
          Validators.required
        );
      } else if (type.startsWith('2')) {
        this.getQuoteForm.controls['dateOfBirth'].addValidators(
          Validators.required
        );
        this._dateTimeAdapter.setLocale('en-US');
      } else if (type.startsWith('7')) {
        this.getQuoteForm.controls['dateOfBirth'].clearValidators();
      }
      this.getQuoteForm.controls['dateOfBirth'].updateValueAndValidity();
    });
  }
  onDateChange(event) {
    let date = this.writeHijri(event.value);
    console.log(date);
    // this.getQuoteForm.controls['dateOfBirth'].setValue(date)
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
