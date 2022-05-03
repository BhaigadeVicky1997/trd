import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../../../services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IOtpSend, IOtpSendResponse } from '../../../../models/IOtpSend';
import { SharedUtils } from 'src/app/utils/shared-utils';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
declare var $: any;

@Component({
  selector: 'app-get-quote-verification',
  templateUrl: './get-quote-verification.component.html',
  styleUrls: ['./get-quote-verification.component.scss'],
})
export class GetQuoteVerificationComponent implements OnInit {
  Id: any;
  Dob: any;
  retrivevehicle: any = false;
  otplayout: any = true;
  otpData: IOtpSend[] = [];
  customerId: any;
  mobileNo: any;
  otp: any;
  loader: boolean = true;
  disclaimer: boolean = false;
  isAgree: boolean = false;
  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _quoteService: QuoteService,
    private _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _globalService: GlobalService
  ) {
    this.Id = this._activeRoute.snapshot.params.Id;
    this.Dob = new Date(
      this._activeRoute.snapshot.params.dob
    ).toLocaleDateString();
    let userState: any = this._authService.userState.value;
    this.customerId = userState.id || this._globalService.customerId.value;
  }

  ngOnInit(): void {
    if (
      this._router.url.startsWith('/wazen/manage/upgrade-policy') ||
      this._router.url.startsWith('/wazen/manage/cancel-policy')
    ) {
      this.sendOTPByCustomerId();
    }
    setTimeout(() => {
      this.otpSetup();
    }, 100);
  }

  sendOTPByCustomerId() {
    this._sharedUtils.showSpinner();
    this._quoteService.getOtpByCustomerId(this.customerId).subscribe(
      (res: IOtpSendResponse) => {
        console.log(res);
        if (res.succeeded) {
          this._sharedUtils.showToast(
            'OTP is send to your mobile or email id',
            '1'
          );
          this._sharedUtils.hideSpinner();
        }
      },
      (err: any) => {
        this.loader = false;
      }
    );
  }

  continueToVehicle() {
    if (this.isAgree) {
      if (this._router.url.startsWith('/wazen/manage/upgrade-policy')) {
        this._router.navigateByUrl(
          '/wazen/manage/upgrade-policy/vehicles/vehicles/' + this.customerId
        );
      } else if (this._router.url.startsWith('/wazen/manage/cancel-policy')) {
        this._router.navigateByUrl(
          '/wazen/manage/cancel-policy/vehicles/vehicles/' + this.customerId
        );
      } else if (this._router.url.startsWith('/wazen/manage/feature')) {
        this._router.navigateByUrl(
          '/wazen/manage/feature/vehicles/vehicles/' + this.customerId
        );
      }
    }
  }
  
  sendOTPByID() {
    this._sharedUtils.showSpinner();
    this._quoteService.getOtpByNationalId(this.Id, this.Dob).subscribe(
      (res: IOtpSendResponse) => {
        console.log(res);
        if (res.succeeded) {
          this.customerId = res.data.customerID;
          this.mobileNo = res.data.mobile;
          console.log(this.customerId);
          setTimeout(() => {
            this._sharedUtils.showToast(
              'OTP is send to your mobile or email id',
              '1'
            );
            this._sharedUtils.hideSpinner();
            this.loader = false;
          }, 1000);
        }
      },
      (err: any) => {
        this.loader = false;
      }
    );
  }

  verifyOTP(data: any) {
    this._sharedUtils.showSpinner();
    this.otp = data.one + '' + data.two + '' + data.three + '' + data.four;
    this._quoteService.getOtpVerify(this.customerId, this.otp).subscribe(
      (res: any) => {
        if (res.succeeded) {
          console.log(res);
          if (
            this._router.url.startsWith('/wazen/manage/upgrade-policy') ||
            this._router.url.startsWith('/wazen/manage/cancel-policy')
          ) {
            this.disclaimer = true;
          } else {
            this._router.navigateByUrl(
              '/wazen/quotes/vehicles/vehicles/' + this.customerId
            );
          }
        } else {
          this._sharedUtils.showToast('Invalid OTP', '0');
        }
        this._sharedUtils.hideSpinner();
      },
      (err: any) => {
        console.log(err.error);
        this.otplayout = true;
        this.retrivevehicle = false;
      }
    );
  }

  resendOTP() {
    this.sendOTPByID();
  }

  otpSetup() {
    $('#otp-verification .form-control').keyup(function (e) {
      //debugger;
      console.log(e);
      if (e.keyCode >= 48 && e.keyCode <= 57)
        if (this.value.length == 0) {
          $(this).blur().parent().prev().children('.form-control').focus();
          $(this).blur().prev('.form-control').focus();
        } else if (this.value.length == this.maxLength) {
          $(this).blur().parent().next().children('.form-control').focus();
          $(this).blur().next('.form-control').focus();
        }
    });
    $('#otp-verification .form-control')[0].focus();
  }
}
