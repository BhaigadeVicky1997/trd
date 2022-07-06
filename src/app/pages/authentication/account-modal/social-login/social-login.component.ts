import { Component, OnInit, ViewChild } from '@angular/core';
import { ISignInResponse, ISocialSignInResponse } from 'src/app/models/ISignIn';
import { AuthService } from 'src/app/services/auth.service';
import { SocialLoginService } from 'src/app/services/social-login.service';
import { SharedUtils } from 'src/app/utils/shared-utils';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
})
export class SocialLoginComponent implements OnInit {
  @ViewChild('signInButton') signInButton;
  isSubmitted: boolean = false;

  constructor(
    private _socialLoginService: SocialLoginService,
    private _authService: AuthService,
    private _sharedUtils: SharedUtils
  ) {}

  ngOnInit(): void {}

  onGoogleLogin() {
    this._socialLoginService
      .signInWithGoogle()
      .then((res) => {
        console.log(res);
        let user = {
          EnglishFirstName: res.firstName,
          EnglishLastName: res.lastName,
          email: res.email,
          LoginType: 1,
        };
        this.signUp(user);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
  onFacebookLogin() {
    this._socialLoginService
      .signInWithFacebook()
      .then((res) => {
        console.log(res);
        let user = {
          EnglishFirstName: res.firstName,
          EnglishLastName: res.lastName,
          email: res.email,
          LoginType: 3,
        };
        this.signUp(user);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
  onTwitterLogin() {
    this._socialLoginService
      .twitterAuth()
      .then((result: any) => {
        let user = {
          EnglishFirstName:
            result.additionalUserInfo.profile.name.split(' ')[0],
          EnglishLastName: result.additionalUserInfo.profile.name.split(' ')[1],
          email: result.additionalUserInfo.profile.email,
          LoginType: 2,
        };
        this.signUp(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signUp(user) {
    this._sharedUtils.showSpinner();
    this._authService.signinUsingSocialAccount(user).subscribe(
      (res: ISocialSignInResponse) => {
        if (res.succeeded) {
          this.signInButton.nativeElement.click();
          this._sharedUtils.showToast('Welcome user', 1);
        } else {
          this._sharedUtils.showToast('Something went wrong', 0);
        }
        this._sharedUtils.hideSpinner();
      },
      (error) => ((this.isSubmitted = false), this._sharedUtils.hideSpinner())
    );
  }
}
