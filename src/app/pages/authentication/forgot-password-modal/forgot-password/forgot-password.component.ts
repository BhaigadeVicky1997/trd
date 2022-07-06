import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IForgotPasswordResponse } from 'src/app/models/IAuthentication';
import { GlobalService } from 'src/app/services/global.service';
import { AuthService } from '../../../../services/auth.service';
import { SharedUtils } from '../../../../utils/shared-utils';

declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
    class: 'tab-pane fade show active',
    id: 'login-contanier',
    role: 'tabpanel',
    'aria-labelledby': 'login-tab',
  },
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  customerId: any;
  isSubmitted: boolean = false;
  @ViewChild('forgotPasswordButton') forgotPasswordButton;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    public _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _globalService: GlobalService,
    private _router: Router
  ) {
    this.customerId = this._activeRoute.snapshot.params.customerId;
  }

  ngOnInit(): void {
    
    this.forgotPasswordForm = this._formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
         
      ]),
    
    });
    this.forgotPasswordForm.reset();
  }
  verfiyEmail() {
    // this._sharedUtils.showToast(
    //   'This email is not registered. Please check your email and try again.',
    //   '0'
    // );
    this.isSubmitted = true;
    for (const i in this.forgotPasswordForm.controls) {
      this.forgotPasswordForm.controls[i].markAsDirty();
      this.forgotPasswordForm.controls[i].updateValueAndValidity();
    }
    
    if (this.forgotPasswordForm.valid){
      let emailAddr = this.forgotPasswordForm.value.email;
      this._authService
        .forgotPassword(this.forgotPasswordForm.value.email)
        .subscribe(
          (res: IForgotPasswordResponse) => {
            console.log(res);
            
            if (res.succeeded) {
              this._globalService.customerId.next(res.data.id);
              this._globalService.resetEmail.next(emailAddr);
              console.log(this._globalService.resetEmail.value);
              this._sharedUtils.showToast(
                'An email is sent to your email. Please reset your password from the link.',
                '1'
              );
              this.forgotPasswordButton.nativeElement.click();
              this.customerId = res.data.id;
              console.log('User found with email', res.data);
              // this._router.navigateByUrl('/authentication/signin');
            } else {
              this._sharedUtils.showToast(
                'This email is not registered. Please check your email and try again.',
                '0'
              );
            }
            this.isSubmitted = false;
          },
          (err) => (this.isSubmitted = false)
        );
    }
    else this.isSubmitted = false;
    this.forgotPasswordForm.reset();
  }
  changeTabToSignup() {
    $('[href="#signup-contanier"]').tab('show');
  }
  
}

