import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStatus } from 'src/app/models/IStatus';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-own-damage-claim',
  templateUrl: './own-damage-claim.component.html',
  styleUrls: ['./own-damage-claim.component.scss'],
})
export class OwnDamageClaimComponent implements OnInit {
  damageTypeForm: FormGroup;
  bodilyInjuredForm: FormGroup;
  deathForm: FormGroup;
  typeofDamage = ['Vehicle', 'Overturn', 'Theft', 'Property', 'Fire'];
  customerId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _globalService: GlobalService,
    private _authService: AuthService,
    private _router: Router,
    private readonly _route: ActivatedRoute
  ) { }

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
    let selectedItems = this.damageTypeForm.value[key]
      .map((x, i) => x && this[key][i])
      .filter((x) => !!x);
    return selectedItems.toString();
  }
  onSubmit() {
    let userState: any = this._authService.userState.value;
    const valueToStore = Object.assign({}, this.damageTypeForm.value, {
      typeofDamage: this.convertToValue('typeofDamage'),
    });
    console.log(valueToStore);
    let data = {
      ...valueToStore,
      ...this.bodilyInjuredForm.value,
      ...this.deathForm.value,
    };
    console.log(data);
    this._globalService.addPlicyClaim(data).subscribe(
      (res: IStatus) => {
        if (res.succeeded) {
          let userState: any = this._authService.userState.value;
          this.customerId = userState.id;
          console.log("customer id", this.customerId);
          this._globalService.sendOTP(this.customerId).subscribe(
            (res: IStatus) => {
              if (res.succeeded) {
                this._router.navigateByUrl('/wazen/claim/own/reference/verifyOTP');
              }
            }
          );
        }
      },
      (err) => console.log(err)
    );
  }
}
