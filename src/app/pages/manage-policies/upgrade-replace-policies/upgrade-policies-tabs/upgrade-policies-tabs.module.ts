import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradePoliciesTabsComponent } from './upgrade-policies-tabs.component';

const routes:Routes = [
  {
    path: '',
    component: UpgradePoliciesTabsComponent,
    children:[
      {
        path:'vehicles',
        loadChildren: () => import('../upgrade-vehicle/upgrade-vehicle.module').then((m) => m.UpgradeVehicleModule),
      },
      {
        path:'choose-quote',
        loadChildren: () => import('../upgrade-choose-quote/upgrade-choose-quote.module').then((n) => n.UpgradeChooseQuoteModule)
      },
      {
        path:'payment',
        loadChildren: () => import('../upgrade-payment/upgrade-payment.module').then((x)=>x.UpgradePaymentModule)
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
    UpgradePoliciesTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpgradePoliciesTabsModule { }
