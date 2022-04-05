import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuoteReviewComponent } from './view-quote-review/view-quote-review.component';
import { ViewQuoteRequestComponent } from './view-quote-request/view-quote-request.component';
import { InternationalizationModule } from 'src/app/utils/internationalization/internationalization.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { SafeUrlPipe } from '../../../pipes/safeurl.pipe';
const routes: Routes = [
  {
    path: 'quote-request',
    component: ViewQuoteRequestComponent,
  },
  {
    path: 'quote-review',
    component: ViewQuoteReviewComponent,
  },
  {
    path: '',
    redirectTo: 'quote-request',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [ViewQuoteReviewComponent, ViewQuoteRequestComponent, SafeUrlPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InternationalizationModule.forRoot({
      locale_id: localStorage.getItem('language') || 'en-US',
    }),
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule
    // BackButtonDisableModule.forRoot({
    //   preserveScrollPosition: true,
    // }),
  ],
  exports: [SafeUrlPipe]
})
export class ChooseQuoteModule {}
