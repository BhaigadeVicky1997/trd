import { RenewPoliciesTabsComponent } from './renew-policies-tabs.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {
    path:'',
    component: RenewPoliciesTabsComponent,
    children :[
      {
        path:'vehicle',
        loadChildren: () => import('../vehicle/vehicle.module').then((m) => m.VehicleModule),
      },
      {
        path:'choose-quote',
        loadChildren: () => import('../choose-quote/choose-quote.module').then((n) => n.ChooseQuoteModule)
      },
      {
        path:'payment',
        loadChildren: () => import('../payment/payment.module').then((x)=>x.PaymentModule)
      },
      {
        path:'',
        redirectTo: 'vehicles',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [
    RenewPoliciesTabsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class RenewPoliciesTabsModule { }
