import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordModalComponent } from './reset-password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternationalizationModule } from 'src/app/utils/internationalization/internationalization.module';
import { RouterModule } from '@angular/router';
import { SharedDirectivesModule } from 'src/app/utils/directives/shared-directives.module';

@NgModule({
  declarations: [ResetPasswordModalComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    SharedDirectivesModule,
  ],
  exports: [ResetPasswordModalComponent],
})
export class ResetPasswordModalModule {}
