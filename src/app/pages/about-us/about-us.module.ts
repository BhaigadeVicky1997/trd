import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { FaqModule } from '../faq/faq.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';

export const routes: Routes = [{ path: '', component: AboutUsComponent }];

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FaqModule, FormsModule, ReactiveFormsModule],
  providers:[ContactUsService]
})
export class AboutUsModule {}
