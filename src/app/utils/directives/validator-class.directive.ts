import { Directive, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[setValidatorClass]',
})
export class ValidatorClassDirective implements OnDestroy {
  valueSub: Subscription;

  constructor(
    private el: ElementRef,
    private formControlName: FormControlName // Inject FormControlName
  ) { }

  ngOnInit() {
    // Listen value changes
    this.valueSub = this.formControlName.valueChanges.subscribe((value) => {
      // Get label
      if (this.formControlName.control.errors) {
        this.el.nativeElement.classList.add('is-invalid');
        this.el.nativeElement.classList.remove('is-valid');
      } else {
        this.el.nativeElement.classList.add('is-valid');
        this.el.nativeElement.classList.remove('is-invalid');
      }
    });
  }

  ngOnDestroy() {
    // Unlisten value changes
    this.valueSub.unsubscribe();
  }
}
