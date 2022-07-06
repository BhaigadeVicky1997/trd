import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionsComponent } from './terms-conditions.component';
import { RouterModule, Routes } from '@angular/router';
import { FaqModule } from '../faq/faq.module';
import { ContactUsService } from 'src/app/services/contact-us.service';

export const routes: Routes = [
  { path: '', component: TermsConditionsComponent },
];

@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FaqModule],
  providers:[ContactUsService]
})
export class TermsConditionsModule {}
