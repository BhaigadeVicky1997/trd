import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ISignInResponse } from 'src/app/models/ISignIn';
import { AuthService } from '../../../../services/auth.service';
import { SharedUtils } from '../../../../utils/shared-utils';

declare var $: any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  host: {
    class: 'tab-pane fade show',
    id: 'login-contanier',
    role: 'tabpanel',
    'aria-labelledby': 'login-tab',
  },
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  isSubmitted: boolean = false;
  passwordVisible = false;
  @ViewChild('signInButton') signInButton;
  currentUrl: any;
  checkUrl: any;

  constructor(
    private _formBuilder: FormBuilder,
    public _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
      // rememberMe: new FormControl(false, [Validators.required]),
    });

    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        this.currentUrl = e.url;
        this.checkUrl = this.currentUrl.includes('manage-policies');
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    for (const i in this.signInForm.controls) {
      this.signInForm.controls[i].markAsDirty();
      this.signInForm.controls[i].updateValueAndValidity();
    }
    if (this.signInForm.valid) {
      let signinForm = {
        username: this.signInForm.value.username,
        password: this.signInForm.value.password,
      };
      this._authService
        .signin(signinForm, this.signInForm.value.rememberMe)
        .subscribe(
          (res: ISignInResponse) => {
            console.log(res);
            // res.succeeded
            if (res) {
              if (res.isAuthenticated == true) {
                this.signInButton.nativeElement.click();
                this._sharedUtils.showToast('Welcome user', 1);
                if (this.checkUrl == true) {
                  this._router.navigateByUrl(this.currentUrl);
                  this._sharedUtils.showToast('OTP Send to email or mobile', 1);
                } else {
                  if (!this._router.url.startsWith('/wazen/quotes'))
                    this._router.navigateByUrl('/wazen/dashboard');
                  else $('#account-popup').modal('hide');
                }
              } else {
                $('#email-verification-popup').modal('show');
              }
            } else {
              console.log(res)
                this._sharedUtils.showToast(res.message, 0);
            }
            this.isSubmitted = false;
          },
          (error) => (this.isSubmitted = false)
        );
    } else this.isSubmitted = false;
  }
  changeTabToSignup() {
    $('[href="#signup-contanier"]').tab('show');
  }
}
