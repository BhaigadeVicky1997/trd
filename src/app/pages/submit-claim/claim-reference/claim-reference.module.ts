import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClaimReferenceComponent } from './claim-reference.component';
import { VehicleLoaderComponent } from './vehicle-loader/vehicle-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitClaimVerificationComponent } from './submit-claim-verification/submit-claim-verification.component';
import { InsuranceCompaniesService } from 'src/app/services/insurance-companies.service';
const routes: Routes = [
  {
    path: '',
    component: ClaimReferenceComponent,
    children: [
      {
        path: 'verifyOTP',
        component: SubmitClaimVerificationComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: 'verify-claim-details',
        component: VehicleLoaderComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: 'verification-failed',
        component: VehicleLoaderComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: '',
        redirectTo: 'verifyOTP',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  declarations: [ClaimReferenceComponent, SubmitClaimVerificationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  providers: [InsuranceCompaniesService]
})
export class ClaimReferenceModule { }
