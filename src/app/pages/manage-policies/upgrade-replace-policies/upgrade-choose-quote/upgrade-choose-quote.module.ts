import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeChooseQuoteComponent } from './upgrade-choose-quote.component';
import { ViewQuoteRequestComponent } from './view-quote-request/view-quote-request.component';
import { ViewQuoteReviewComponent } from './view-quote-review/view-quote-review.component';

const routes:Routes = [
  {
    path:'',
    component: UpgradeChooseQuoteComponent,
    children:[
      {
        path:'view-quote-request',
        component:ViewQuoteRequestComponent
      },
      {
        path:'view-quote-review',
        component:ViewQuoteReviewComponent
      },
      {
        path:'',
        redirectTo:'view-quote-request',
        pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    UpgradeChooseQuoteComponent,
    ViewQuoteRequestComponent,
    ViewQuoteReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpgradeChooseQuoteModule { }
