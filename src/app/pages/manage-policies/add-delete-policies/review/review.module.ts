import { ReviewComponent } from './review.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewBankComponent } from './review-bank/review-bank.component';
import { ReviewConfirmComponent } from './review-confirm/review-confirm.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {
    path:'',
    component: ReviewComponent,
    children: [
      {
        path:'review-bank',
        component: ReviewBankComponent
      },
      {
        path:'review-confirm',
        component: ReviewConfirmComponent
      },
      {
        path: '',
        redirectTo: 'review-bank',
        pathMatch: 'full',
      },

    ]

  }
]

@NgModule({
  declarations: [
    ReviewBankComponent,
    ReviewConfirmComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ReviewModule { }
