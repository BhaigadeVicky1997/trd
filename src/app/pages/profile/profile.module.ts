import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { InternationalizationModule } from '../../utils/internationalization/internationalization.module';
import { ProfileService } from '../../services/profile.service';
import { MyPoliciesComponent } from './my-policies/my-policies.component';
import { ClaimTrackingComponent } from './claim-tracking/claim-tracking.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxSpinnerModule } from 'ngx-spinner';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'my-account',
        loadChildren: () =>
          import('./my-account-tab/my-account-tab.module').then(
            (m) => m.MyAccountTabModule
          ),
      },
      {
        path: 'my-policy',
        component: MyPoliciesComponent,
      },
      {
        path: 'my-transactions',
        component: MyTransactionComponent,
      },
      {
        path: 'my-claims',
        component: ClaimTrackingComponent,
      },
      {
        path: '',
        redirectTo: 'my-policy',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    MyTransactionComponent,
    ClaimTrackingComponent,
    MyAccountComponent,
    MyPoliciesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InternationalizationModule.forRoot({ locale_id: 'en-US' }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxSpinnerModule,
  ],
  providers: [ProfileService],
})
export class ProfileModule {}
