import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InternationalizationModule } from '../../../utils/internationalization/internationalization.module';
import { MyAccountTabComponent } from './my-account-tab.component';
import { SignupComponent } from '../../authentication/account-modal/signup/signup.component';
import { MyAccountComponent } from '../my-account/my-account.component';
import { ResetPasswordComponent } from '../../authentication/reset-password-modal/reset-password/reset-password.component';
import { LanguagePreferenceComponent } from './language-preference/language-preference.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { NewsSubcriptionComponent } from './news-subcription/news-subcription.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: MyAccountTabComponent,
    children: [
      { path: '', component: MyAccountComponent },
      {
        path: 'edit-profile',
        component: SignupComponent,
        data: {
          type: 'edit',
        },
      },
      {
        path: 'change-password',
        component: ResetPasswordComponent,
        data: {
          type: 'edit',
        },
      },
      {
        path: 'change-language',
        component: LanguagePreferenceComponent,
      },
      {
        path: 'news-subscription',
        component: NewsSubcriptionComponent,
      },
      {
        path: 'delete-account',
        component: DeleteAccountComponent,
      },
      // { path: '', redirectTo: 'edit-profile', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    MyAccountTabComponent,
    LanguagePreferenceComponent,
    NewsSubcriptionComponent,
    DeleteAccountComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    InternationalizationModule.forRoot({ locale_id: 'en-US' }),
  ],
})
export class MyAccountTabModule {}
