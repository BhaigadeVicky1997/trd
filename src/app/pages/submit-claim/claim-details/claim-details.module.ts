import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimDetailsComponent } from './claim-details.component';
import { ClaimReferenceComponent } from './claim-reference/claim-reference.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnDamageClaimComponent } from './own-damage-claim/own-damage-claim.component';
import { ThirdPartyDamageClaimComponent } from './third-party-damage-claim/third-party-damage-claim.component';
import { SharedDirectivesModule } from 'src/app/utils/directives/shared-directives.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { InsuranceCompaniesService } from 'src/app/services/insurance-companies.service';

export const MY_NATIVE_FORMATS = {
  fullPickerInput: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  },
  datePickerInput: { year: 'numeric', month: 'long', day: 'numeric' },
  timePickerInput: { hour: 'numeric', minute: 'numeric' },
  monthYearLabel: { year: 'numeric', month: 'short' },
  dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
  monthYearA11yLabel: { year: 'numeric', month: 'long' },
};
const routes: Routes = [
  {
    path: '',
    component: ClaimDetailsComponent,
    children: [
      {
        path: 'reference',
        component: ClaimReferenceComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: 'own-damage',
        component: OwnDamageClaimComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: 'third-party-damage',
        component: ThirdPartyDamageClaimComponent,
        data: {
          parent: 'Claim Reference',
          title: 'Claim Reference',
        },
      },
      {
        path: '',
        redirectTo: 'reference',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    ClaimDetailsComponent,
    ClaimReferenceComponent,
    OwnDamageClaimComponent,
    ThirdPartyDamageClaimComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedDirectivesModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_NATIVE_FORMATS },
    InsuranceCompaniesService
  ]
})
export class ClaimDetailsModule { }
