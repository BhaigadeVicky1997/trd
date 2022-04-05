import { Injectable } from '@angular/core';
import {
  FacebookLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class SocialLoginService {
  user: SocialUser = new SocialUser();
  constructor(private _socialAuthService: SocialAuthService, public afAuth: AngularFireAuth) { }

  public signInWithGoogle() {
    return this._socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signInWithFacebook() {
    return this._socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  public signOut(): void {
    this._socialAuthService.signOut();
  }

  // Sign in with Twitter
  twitterAuth() {
    return this.authLogin(new firebase.auth.TwitterAuthProvider());
  }

  // Auth logic to run auth providers
  authLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
