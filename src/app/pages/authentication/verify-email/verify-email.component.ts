import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { IStatus } from 'src/app/models/IStatus';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

declare var $: any;

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  otpForm: FormGroup;
  isSubmitted: boolean = false;
  @ViewChild('verfiyCodeButton') verfiyCodeButton;

  constructor(
    private _formBuilder: FormBuilder,
    public _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.otpForm = this._formBuilder.group({
      verifycode: new FormControl('', [Validators.required]),
    });
  }

  verifyOTP() {
    this.isSubmitted = true;
    for (const i in this.otpForm.controls) {
      this.otpForm.controls[i].markAsDirty();
      this.otpForm.controls[i].updateValueAndValidity();
    }
    if (this.otpForm.valid) {
      if (!!this._globalService.customerId.value) {
        this._authService
          .verifyCustomer(
            this._globalService.customerId.value,
            this.otpForm.value.verifycode
          )
          .subscribe(
            (res: IStatus) => {
              console.log(res);
              if (res.succeeded) {
                $('#email-verification-popup').modal('hide');
                $('#account-popup').modal('hide');
                this._sharedUtils.showToast('Thankyou for verification.!', '1');
                this.otpForm.reset();
              } else {
                this._sharedUtils.showToast(res.message, '0');
              }
              this.isSubmitted = false;
            },
            (err) => (this.isSubmitted = false)
          );
      }
    } else this.isSubmitted = false;
  }

  verfiyEmail() {
    this._authService
      .resendVerificationOTP(this._globalService.customerId.value)
      .subscribe(
        (res: IStatus) => {
          if (res.succeeded) {
            this._sharedUtils.showToast(
              'Verification code has been resend.',
              '1'
            );
          } else {
            this._sharedUtils.showToast('Something went wrong', '0');
          }
        },
        (err) => console.error(err)
      );
  }
}
