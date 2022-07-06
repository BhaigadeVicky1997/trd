import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyDetailsComponent } from './policy-details.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PolicyDetailsComponent,
  },
];

@NgModule({
  declarations: [PolicyDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PolicyDetailsModule {}
