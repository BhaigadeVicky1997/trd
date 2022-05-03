import { QuoteService } from 'src/app/services/quote.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DateTimeAdapter } from 'ng-pick-datetime';
import {
  IDashboardBanner,
  IDashboardBannerResponse,
  IDashboardPartnerLogo,
  IDashboardPartnerLogoResponse,
} from '../../models/IDashboard';
import { DashboardService } from '../../services/dashboard.service';
import { SharedUtils } from '../../utils/shared-utils';
import { IStatus } from '../../models/IStatus';
import { AuthService } from '../../services/auth.service';
import * as moment from 'moment';
import { GlobalService } from 'src/app/services/global.service';
import { FaqService } from 'src/app/services/faq.service';
import { IFaq, IFaqsResponse } from 'src/app/models/IFaq';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
/** dashboard component*/
export class DashboardComponent implements OnInit {
  /** dashboard ctor */
  getQuoteForm: FormGroup;
  banners: IDashboardBanner[] = [];
  partnerLogos: IDashboardPartnerLogo[] = [];
  isSubmitted: boolean = false;
  maxDate: Date = new Date();
  loader: boolean = true;
  id: any;
  cid: any;
  verifycode: any;
  reset: any;
  Faqs: IFaq[] = [];
  constructor(
    private _dashboardService: DashboardService,
    public sharedUtils: SharedUtils,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _dateTimeAdapter: DateTimeAdapter<any>,
    private _quoteService: QuoteService,
    private _authService: AuthService,
    private _globalService: GlobalService,
    private _faqService: FaqService
  ) {
    this.id = this._activeRoute.snapshot.queryParams.id;
    this.cid = this._activeRoute.snapshot.queryParams.cid;
    this.verifycode = this._activeRoute.snapshot.queryParams.VerifyCode;
    this.reset = this._activeRoute.snapshot.queryParams.reset;
  }

  async ngOnInit() {
    localStorage.setItem('tempCid', this.id);
    this.getQuoteForm = this._formBuilder.group({
      nationalId: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1|2|7]+[0-9]{9}$'),
      ]),
      dateOfBirth: new FormControl('', [Validators.required]),
    });
    if (this.reset) {
      this.verifyOTP();
    }
    await this.getBanners();
    await this.getPartnerLogo();
    this.changeCalendar();
    console.log(this._activeRoute);
    console.log(
      this.id + ' ' + this.cid + ' ' + this.verifycode + ' ' + this.reset
    );
    this.getFaqs();
  }

  getBanners() {
    this._dashboardService
      .getBanners()
      .subscribe((res: IDashboardBannerResponse) => {
        console.log(res);
        if (res.succeeded) {
          this.banners = res.data;
        }
      });
  }
  getPartnerLogo() {
    this._dashboardService
      .getPartnerLogo()
      .subscribe((res: IDashboardPartnerLogoResponse) => {
        console.log(res);
        if (res.succeeded) {
          this.partnerLogos = res.data;
        }
      });
  }

  getQuoteVerification() {
    for (const i in this.getQuoteForm.controls) {
      this.getQuoteForm.controls[i].markAsDirty();
      this.getQuoteForm.controls[i].updateValueAndValidity();
    }
    this.isSubmitted = true;
    if (this.getQuoteForm.valid) {
      this.sharedUtils.showSpinner();
      this._quoteService
        .getOtpByNationalId(
          this.getQuoteForm.value.nationalId,
          moment(this.getQuoteForm.value.dateOfBirth).format('YYYY-M-D')
        )
        .subscribe(
          (res: any) => {
            console.log(res);
            if (res.succeeded) {
              let user = {
                salutation: res.data.salutationId,
                firstName: res.data.englishFirstName,
                lastName: res.data.englishLastName,
                nationalID: res.data.nin && res.data.nin.trim(),
                contact: res.data.mobile,
                email: 'rohitchauhan8898515299@gmail.com',
              };
              this._globalService.quoteUser.next(user);
              this._globalService.customerId.next(res.data.id);
              localStorage.setItem('tempCustomer_ID', res.data.id);
              setTimeout(() => {
                // this.sharedUtils.showToast(
                //   'OTP is send to your mobile or email id',
                //   '1'
                // );
                this.sharedUtils.hideSpinner();
                this.loader = false;
                this.isSubmitted = false;
                // this._router.navigateByUrl(
                //   '/wazen/quotes/vehicles/get-quote-verification/' +
                //     this.getQuoteForm.value.nationalId +
                //     '/' +
                //     moment(this.getQuoteForm.value.dateOfBirth).format(
                //       'YYYY-M-D'
                //     )
                // );
                this._router.navigateByUrl(
                  '/wazen/quotes/vehicles/vehicles/' + res.data.id
                );
              }, 1500);
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
              this.isSubmitted = false;
            }, 1000);
          }
        );
    } else this.isSubmitted = false;
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
  verifyOTP() {
    this._authService.submitVerifyCode(this.id, this.verifycode).subscribe(
      (res: IStatus) => {
        console.log(res);
        if (res.succeeded) {
          $('#create-password-popup').modal('show');
        } else {
          this.sharedUtils.showToast('Invalid OTP', '0');
        }
      },
      (err) => (this.isSubmitted = false)
    );
  }
  checkLogin(url: string) {
    let user = this._authService.userState.value;
    if (!Object.keys(user).length) {
      $('#account-popup').modal('show');
    } else {
      this._router.navigateByUrl(url);
    }
  }

  getFaqs() {
    this._faqService.getFaqs().subscribe((res: IFaqsResponse) => {
      if (res.succeeded) {
        this.Faqs = res.data;
        console.log('FAQs', this.Faqs);
      }
    });
  }
}
