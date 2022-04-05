import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIncrementDecrement]',
})
export class IncrementDecrementDirective {
  constructor() { }
  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!event.srcElement.classList.contains('o-5'))
      if (event.srcElement.id == 'increase') {
        // for increment
        let input = event.srcElement.parentElement.parentElement.children[0];
        parseInt(input.value, 10);
        let value = isNaN(input.value) ? 0 : input.value;
        value++;
        input.value = value;
      } else {
        // for decrement
        debugger
        let input = event.srcElement.parentElement.parentElement.children[0];
        parseInt(input.value, 10);
        let value = isNaN(input.value) ? 1 : input.value;
        value < 1 ? (value = 1) : '';
        if (value > 1) value--;
        input.value = value;
      }
  }
}
