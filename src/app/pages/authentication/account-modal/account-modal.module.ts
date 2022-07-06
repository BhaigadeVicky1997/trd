import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModalComponent } from './account-modal.component';
import { InternationalizationModule } from '../../../utils/internationalization/internationalization.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedDirectivesModule } from '../../../utils/directives/shared-directives.module';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SocialLoginService } from 'src/app/services/social-login.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const GOOGLE_CLIENT_ID = environment.clientId;
const FACEBOK_APP_ID = environment.appId;
export const routes: Routes = [
  {
    path: '',
    component: AccountModalComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'wazen/dashboard',
        redirectTo: 'signin',
        // pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    AccountModalComponent,
    SigninComponent,
    SignupComponent,
    SocialLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    SharedDirectivesModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(GOOGLE_CLIENT_ID),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(FACEBOK_APP_ID),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    SocialLoginService,
  ],
  exports: [AccountModalComponent, SocialLoginComponent],
})
export class AccountModalModule {}
