import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitClaimComponent } from './submit-claim.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'own',
    component: SubmitClaimComponent,
    children: [
      {
        path: 'details',
        loadChildren: () =>
          import('./claim-details/claim-details.module').then(
            (m) => m.ClaimDetailsModule
          ),
      },
      {
        path: 'reference',
        loadChildren: () =>
          import('./claim-reference/claim-reference.module').then(
            (m) => m.ClaimReferenceModule
          ),
      },
      {
        path: 'review',
        loadChildren: () =>
          import('./claim-review/claim-review.module').then(
            (m) => m.ClaimReviewModule
          ),
      },
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'third',
    component: SubmitClaimComponent,
    children: [
      {
        path: 'details',
        loadChildren: () =>
          import('./claim-details/claim-details.module').then(
            (m) => m.ClaimDetailsModule
          ),
      },
      {
        path: 'reference',
        loadChildren: () =>
          import('./claim-reference/claim-reference.module').then(
            (m) => m.ClaimReferenceModule
          ),
      },
      {
        path: 'review',
        loadChildren: () =>
          import('./claim-review/claim-review.module').then(
            (m) => m.ClaimReviewModule
          ),
      },
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [SubmitClaimComponent],
  imports: [CommonModule, RouterModule.forChild(appRoutes)],
})
export class SubmitClaimModule {}
