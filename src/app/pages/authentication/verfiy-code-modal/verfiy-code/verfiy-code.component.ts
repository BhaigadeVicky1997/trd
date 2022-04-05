import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IStatus } from 'src/app/models/IStatus';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { SharedUtils } from 'src/app/utils/shared-utils';
import { IForgotPasswordResponse } from 'src/app/models/IAuthentication';

@Component({
  selector: 'app-verfiy-code',
  templateUrl: './verfiy-code.component.html',
  styleUrls: ['./verfiy-code.component.scss'],
  host: {
    class: 'tab-pane fade show active',
    id: 'login-contanier',
    role: 'tabpanel',
    'aria-labelledby': 'login-tab',
  },
})
export class VerfiyCodeComponent implements OnInit {
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
          .submitVerifyCode(
            this._globalService.customerId.value,
            this.otpForm.value.verifycode
          )
          .subscribe(
            (res: IStatus) => {
              console.log(res);
              if (res.succeeded) {
                this.verfiyCodeButton.nativeElement.click();
                console.log('Customer found with id', res);
                //this._sharedUtils.showToast('Your password has been reset', 2);
                // this._router.navigateByUrl('/authentication/signin');
              } else {
                this._sharedUtils.showToast('Invalid OTP', '0');
              }

              this.isSubmitted = false;
            },
            (err) => (this.isSubmitted = false)
          );
      }
    } else this.isSubmitted = false;
    this.otpForm.reset();
  }

  verfiyEmail() {
      this._authService
        .forgotPassword(this._globalService.resetEmail.value)
        .subscribe(
          (res: IForgotPasswordResponse) => {
            console.log(res);
            console.log("in verify code-",this._globalService.resetEmail.value);
            if (res.succeeded) {
              this._globalService.customerId.next(res.data.id);
              this._sharedUtils.showToast(
                'Verification code has been resend. Please reset your password from the link.',
                '1'
              );
              console.log('User found with email', res.data);
              // this._router.navigateByUrl('/authentication/signin');
            } else {
              this._sharedUtils.showToast(
                'Something went wrong',
                '0'
              );
            }
            this.isSubmitted = false;
          },
          (err) => (err)
        );
  }
}
