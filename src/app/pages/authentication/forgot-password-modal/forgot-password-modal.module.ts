import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternationalizationModule } from 'src/app/utils/internationalization/internationalization.module';
import { ForgotPasswordModalComponent } from './forgot-password-modal.component';

@NgModule({
  declarations: [ForgotPasswordModalComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
  ],
  exports: [ForgotPasswordModalComponent],
})
export class ForgotPasswordModalModule {}
