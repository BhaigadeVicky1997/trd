import { AddDeleteTabsComponent } from './add-delete-tabs.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:'',
    component: AddDeleteTabsComponent,
    children: [
      {
        path: 'vehicles',
        loadChildren: () =>
          import('../vehicle/vehicle.module').then((m) => m.VehicleModule),
      },
      {
        path: 'review',
        loadChildren: () =>
          import('../review/review.module').then((m) => m.ReviewModule),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('../payment/payment.module').then((m) => m.PaymentModule),
      },
      {
        path: '',
        redirectTo: 'vehicles',
        pathMatch: 'full',
      },
    ],

  }
]

@NgModule({
  declarations: [AddDeleteTabsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AddDeleteTabsModule { }
