import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerfiyCodeComponent } from './verfiy-code/verfiy-code.component';
import { VerfiyCodeModalComponent } from './verfiy-code-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternationalizationModule } from 'src/app/utils/internationalization/internationalization.module';

@NgModule({
  declarations: [VerfiyCodeModalComponent, VerfiyCodeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
  ],
  exports: [VerfiyCodeModalComponent],
})
export class VerifyCodeModalModule {}
