import { UpgradeThankComponent } from './upgrade-thank.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes:Routes = [
  {
    path:'',
    component:UpgradeThankComponent,
    children: [
      {
        path:'thank-you',
        component:ThankYouComponent
      },
      {
        path:'',
        redirectTo:'thank-you',
        pathMatch:'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    ThankYouComponent,
    UpgradeThankComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpgradeThankModule { }
