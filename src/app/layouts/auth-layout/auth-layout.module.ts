import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthLayoutComponent } from './auth-layout.component';
import { AccountModalModule } from '../../pages/authentication/account-modal/account-modal.module';
import { ForgotPasswordModalModule } from '../..//pages/authentication/forgot-password-modal/forgot-password-modal.module';
import { VerifyCodeModalModule } from '../../pages/authentication/verfiy-code-modal/verify-code-modal.module';
import { ResetPasswordModalModule } from '../../pages/authentication/reset-password-modal/reset-password-modal.module';
import { InternationalizationModule } from '../../utils/internationalization/internationalization.module';
import { VerifyEmailComponent } from '../../pages/authentication/verify-email/verify-email.component';

@NgModule({
  declarations: [AuthLayoutComponent, VerifyEmailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    AccountModalModule,
    ForgotPasswordModalModule,
    ResetPasswordModalModule,
    VerifyCodeModalModule,
  ],
  providers: [AuthService],
  exports: [AuthLayoutComponent, VerifyEmailComponent],
})
export class AuthLayoutModule { }
