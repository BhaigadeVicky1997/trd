import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification/verification.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

const routes : Routes = [
  {
    path:'',
    component:VehicleComponent,
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
    VehicleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VehicleModule { }
