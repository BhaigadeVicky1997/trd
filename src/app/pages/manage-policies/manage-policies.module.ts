import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePoliciesComponent } from './manage-policies.component';


export const routes: Routes = [
  {
    path: '',
    component: ManagePoliciesComponent,
    children: [
      {
        path: 'cancel-policies-tabs',
        loadChildren: () =>
        import('./cancel-policies/cancel-policies.module').then(
          (m) => m.CancelPoliciesModule
        ),
      },
      {
        path: 'add-delete-tabs',
        loadChildren: () => import('./add-delete-policies/add-delete-tabs/add-delete-tabs.module').then(
          (m) => m.AddDeleteTabsModule
        )
      },
      {
        path: 'renew-policies-tabs',
        loadChildren: () =>
          import('./renew-policies/renew-policies-tabs/renew-policies-tabs.module').then(
            (m)=>m.RenewPoliciesTabsModule
          )
      },
      {
        path: 'upgrade-policies-tabs',
        loadChildren: () =>
          import('./upgrade-replace-policies/upgrade-policies-tabs/upgrade-policies-tabs.module').then(
            (m)=>m.UpgradePoliciesTabsModule
          )
      },
      {
        path: '',
        redirectTo: 'cancel-policies',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ManagePoliciesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagePoliciesModule { }
