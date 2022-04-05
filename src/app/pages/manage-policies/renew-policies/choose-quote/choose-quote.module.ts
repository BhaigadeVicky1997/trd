import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewQuoteRequestComponent } from './view-quote-request/view-quote-request.component';
import { ViewQuoteReviewComponent } from './view-quote-review/view-quote-review.component';
import { ChooseQuoteComponent } from './choose-quote.component';

const routes: Routes = [
  {
    path:'',
    component:ChooseQuoteComponent,
    children : [
      {
        path:'view-quote-request',
        component: ViewQuoteRequestComponent
      },
      {
        path: 'view-quote-review',
        component: ViewQuoteReviewComponent
      },
      {
        path:'',
        redirectTo:'view-quote-request',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    ViewQuoteRequestComponent,
    ViewQuoteReviewComponent,
    ChooseQuoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChooseQuoteModule { }
