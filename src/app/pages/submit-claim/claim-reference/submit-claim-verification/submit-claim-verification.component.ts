import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../../../services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IOtpSend, IOtpSendResponse } from '../../../../models/IOtpSend';
import { SharedUtils } from 'src/app/utils/shared-utils';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
declare var $: any;

@Component({
  selector: 'app-submit-claim-verification',
  templateUrl: './submit-claim-verification.component.html',
  styleUrls: ['./submit-claim-verification.component.scss'],
})
export class SubmitClaimVerificationComponent implements OnInit {
  Id: any;
  retrivevehicle: any = false;
  otplayout: any = true;
  otpData: IOtpSend[] = [];
  customerId: any;
  mobileNo: any;
  otp: any;
  loader: boolean = true;

  constructor(
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _quoteService: QuoteService,
    private _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _globalService: GlobalService
  ) {
    this.Id = this._activeRoute.snapshot.params.Id;
    let userState: any = this._authService.userState.value;
    this.customerId = userState.id;
  }

  ngOnInit(): void {
    //this.customerId && this.sendOTPByID();
  }

  sendOTPByID() {
    this._sharedUtils.showSpinner();
    this._globalService.sendOTP(this.customerId).subscribe(
      (res: IOtpSendResponse) => {
        console.log(res);
        if (res.succeeded) {
          this.otpSetup();
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
    console.log(this.otp);
    this._quoteService.getOtpVerify(this.customerId, this.otp).subscribe(
      (res: any) => {
        if (res.succeeded) {
          console.log(res);
          setTimeout(() => {
            this._router.navigateByUrl(
              '/wazen/claim/own/reference/verify-claim-details'
            );
            this._sharedUtils.hideSpinner();
          }, 3000);
        } else {
          this._sharedUtils.showToast('Invalid OTP', '0');
        }
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
    $('#otp-verification .form-control').keyup(function () {
      if (this.value.length == 0) {
        $(this).blur().parent().prev().children('.form-control').focus();
        $(this).blur().prev('.form-control').focus();
      } else if (this.value.length == this.maxLength) {
        $(this).blur().parent().next().children('.form-control').focus();
        $(this).blur().next('.form-control').focus();
      }
    });
  }
}
