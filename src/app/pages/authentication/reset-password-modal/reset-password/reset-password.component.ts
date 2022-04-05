import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStatus } from 'src/app/models/IStatus';
import { GlobalService } from 'src/app/services/global.service';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from '../../../../services/auth.service';
import { SharedUtils } from '../../../../utils/shared-utils';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  host: {
    class: 'tab-pane fade show active',
    id: 'login-contanier',
    role: 'tabpanel',
    'aria-labelledby': 'login-tab',
  },
})
/** add-user component*/
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  changePasswordForm: FormGroup;
  userId: any;
  isSubmitted: boolean = false;
  passwordVisible = false;
  confirmPasswordVisible = false;
  customerId: string = '';
  formType: boolean = false;
  cid: any;
  @ViewChild('resetPasswordButton') resetPasswordButton;

  constructor(
    private _formBuilder: FormBuilder,
    private _profileService: ProfileService,
    private _activeRoute: ActivatedRoute,
    public _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _globalService: GlobalService,
    private _router: Router
  ) {
    this.userId = this._activeRoute.snapshot.params.userId;
    this.formType =
      this._activeRoute.snapshot.data.type &&
      this._activeRoute.snapshot.data.type == 'edit';
    let userState: any = this._authService.userState.value;
    this.customerId = userState.id;
    this.cid = localStorage.getItem('tempCid');
  }

  ngOnInit(): void {
    console.log(this.cid);
    this.resetPasswordForm = this._formBuilder.group({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    this.changePasswordForm = this._formBuilder.group({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  resetPassword() {
    //alert(this.cid);
    this.isSubmitted = true;
    for (const i in this.resetPasswordForm.controls) {
      this.resetPasswordForm.controls[i].markAsDirty();
      this.resetPasswordForm.controls[i].updateValueAndValidity();
    }
    if (this.resetPasswordForm.valid) {
      let data = {};
      if (this.cid) {
        data = {
          id: this.cid,
          password: this.resetPasswordForm.value.password,
        };
      }
      if (!!this._globalService.customerId.value) {
        data = {
          id: this._globalService.customerId.value,
          password: this.resetPasswordForm.value.password,
        };
      }
      if (this.cid || !!this._globalService.customerId.value) {     
        console.log(data);
        this._authService.resetPassword(data).subscribe(
          (res: IStatus) => {
            this.resetPasswordButton.nativeElement.click();
            console.log(res);
            if (res.succeeded) {
              this._sharedUtils.showToast('Your password has been reset', 1);
              console.log('User found with id', res);
              // this._router.navigateByUrl('/authentication/signin');
            }
            this.isSubmitted = false;
          },
          (err) => (this.isSubmitted = false)
        );
      }
    } else this.isSubmitted = false;
  }

  changePassword() {
    console.log(this.customerId);
    this.isSubmitted = true;
    for (const i in this.changePasswordForm.controls) {
      this.changePasswordForm.controls[i].markAsDirty();
      this.changePasswordForm.controls[i].updateValueAndValidity();
    }
    if (this.changePasswordForm.valid) {
      if (!!this.customerId) {
        let data = {
          customerID: this.customerId,
          password: this.changePasswordForm.value.oldPassword,
          newPassword: this.changePasswordForm.value.newPassword,
        };
        console.log(data);
        this._profileService.changePassword(data).subscribe(
          (res: IStatus) => {
            console.log(res);
            if (res.succeeded) {
              console.log('User found with id', res);
              this._sharedUtils.showToast('Your password has been changed', 1);
              this._router.navigateByUrl('/wazen/profile/my-account');
            }
            this.isSubmitted = false;
          },
          (err) => (this.isSubmitted = false)
        );
      }
    } else this.isSubmitted = false;
  }
}
