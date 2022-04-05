import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-third-party-damage-claim',
  templateUrl: './third-party-damage-claim.component.html',
  styleUrls: ['./third-party-damage-claim.component.scss'],
})
export class ThirdPartyDamageClaimComponent implements OnInit {
  damageTypeForm: FormGroup;
  bodilyInjuredForm: FormGroup;
  deathForm: FormGroup;
  typeofDamage = ['Vehicle', 'Overturn', 'Theft', 'Property', 'Fire'];
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.damageTypeForm = this._formBuilder.group({
      typeofDamage: this._formBuilder.array(this.typeofDamage.map((x) => !1)),
    });
    this.bodilyInjuredForm = this._formBuilder.group({
      isBodilyInjured: new FormControl(false, [Validators.required]),
      BIInsuredDriver: new FormControl(false, [Validators.required]),
      BIOtherVehicle: new FormControl(false, [Validators.required]),
      BINumberofPassenger: new FormControl(1, [Validators.required]),
    });
    this.deathForm = this._formBuilder.group({
      isDeath: new FormControl(false, [Validators.required]),
      DInsuredDriver: new FormControl(false, [Validators.required]),
      DOtherVehicle: new FormControl(false, [Validators.required]),
      DNumberofPassenger: new FormControl(1, [Validators.required]),
    });
  }
  get isBodilyInjured() {
    return this.bodilyInjuredForm.controls['isBodilyInjured'].value;
  }
  get isDeath() {
    return this.deathForm.controls['isDeath'].value;
  }
  convertToValue(key: string) {
    return this.damageTypeForm.value[key]
      .map((x, i) => x && this[key][i])
      .filter((x) => !!x);
  }
  onSubmit() {
    let userState: any = this._authService.userState.value;
    const valueToStore = Object.assign({}, this.damageTypeForm.value, {
      typeofDamage: this.convertToValue('typeofDamage'),
    });
    console.log(valueToStore);
    this._router.navigateByUrl('/wazen/claim/own/reference/verifyOTP');
    // this._globalService.sendOTP(userState.id).subscribe((res: IStatus) => {
    //   if (res.succeeded) {
    //   }
    // }, err => console.log(err))
  }
}
