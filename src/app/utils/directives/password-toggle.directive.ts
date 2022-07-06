import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[passwordToggle]',
})
export class PasswordToggleDirective {
  private _shown = true;

  constructor(private el: ElementRef) {
    const parent = this.el.nativeElement.parentNode;
    const i = document.createElement('i');
    i.className = 'bx bx-show password-icon';
    if (parent.classList.contains('is-invalid')) {
      i.style.right = '2rem';
    }
    i.addEventListener('click', () => {
      this.toggle(i);
    });
    parent.appendChild(i);
  }

  toggle(i: HTMLElement) {
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      i.className = 'bx bx-hide password-icon';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      i.className = 'bx bx-show password-icon';
    }
    this._shown = !this._shown;
  }
}
