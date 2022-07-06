import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector:
    '[confirmPassword][formControlName],[confirmPassword][formControl],[confirmPassword][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ConfirmPasswordValidator),
      multi: true,
    },
  ],
})
export class ConfirmPasswordValidator {
  constructor(
    @Attribute('confirmPassword') public confirmPassword: string,
    @Attribute('reverse') public reverse: string
  ) {}
  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    // self value
    let v = c.value;

    // control vlaue
    let e = c.root.get(this.confirmPassword);

    // value not equal
    if (e && v !== e.value && !this.isReverse) {
      return {
        confirmPassword: true,
      };
    }

    // value equal and reverse
    if (e && v === e.value && this.isReverse && e.errors) {
      e.errors['confirmPassword'] && delete e.errors['confirmPassword'];
      if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
      e.setErrors({ confirmPassword: true });
    }

    return null;
  }
}
