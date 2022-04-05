import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification/verification.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { VehicleComponent } from './vehicle.component';

const route:Routes = [
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
          path: 'vehicle-view',
          component: VehicleViewComponent
        },
        {
          path: '',
          redirectTo: 'verification',
          pathMatch: 'full',
        },
     ]
   }

]


@NgModule({
  declarations: [
    VerificationComponent,
    VehicleListComponent,
    VehicleViewComponent,
    VehicleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class VehicleModule { }
