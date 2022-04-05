import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ToastrService, ToastPackage, Toast } from 'ngx-toastr';

@Component({
  selector: 'app-custom-toast',
  template: `
  <div class="notyf__toast notyf__toast" [ngClass]="title == '1' ? 'notyf__toast--success':'notyf__toast--error'">
    <div class="notyf__wrapper">
      <div class="notyf__icon">
        <i [ngClass]="title == '1' ? 'notyf__icon--success':'notyf__icon--error'"></i>
      </div>
      <div class="notyf__message">{{ message }}</div>
    </div>
    <div
      class="notyf__ripple"></div>
  </div>
`, styleUrls: ['./custom-toast.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({ opacity: 0 })),
      transition(
        'inactive => active',
        animate(
          '300ms ease-out',
          keyframes([
            style({
              opacity: 0,
              bottom: '-15px',
              'max-height': 0,
              'max-width': 0,
              'margin-top': 0,
            }),
            style({
              opacity: 0.8,
              bottom: '-3px',
            }),
            style({
              opacity: 1,
              bottom: '0',
              'max-height': '200px',
              'margin-top': '12px',
              'max-width': '400px',
            }),
          ]),
        ),
      ),
      state(
        'active',
        style({
          bottom: '0',
          'max-height': '200px',
          'margin-top': '12px',
          'max-width': '400px',
        }),
      ),
      transition(
        'active => removed',
        animate(
          '300ms ease-out',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateY(0)'
            }),
            style({
              opacity: 0,
              transform: 'translateY(25%)'
            }),
          ]),
        ),
      ),
    ]),
  ],
})
export class CustomToastComponent extends Toast {
  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
  }
}
