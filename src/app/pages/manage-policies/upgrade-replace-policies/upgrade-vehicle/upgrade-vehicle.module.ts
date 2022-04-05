import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification/verification.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { UpgradeVehicleComponent } from './upgrade-vehicle.component';

const routes : Routes = [
  {
    path:'',
    component:UpgradeVehicleComponent,
    children:[
       {
         path:'verification',
         component:VerificationComponent
       },
       {
         path:'vehicle-list',
         component: VehicleListComponent
       },
       {
         path: '',
         redirectTo: 'vehicle-list',
         pathMatch: 'full',
       },
    ]
  }
]

@NgModule({
  declarations: [
    VerificationComponent,
    VehicleListComponent,
    UpgradeVehicleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UpgradeVehicleModule { }
