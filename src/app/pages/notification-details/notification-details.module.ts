import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDetailsComponent } from './notification-details.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: NotificationDetailsComponent },
];

@NgModule({
  declarations: [NotificationDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NotificationDetailsModule {}
