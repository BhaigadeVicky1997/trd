import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomerResponse } from '../../../../models/ICustomer';
import { IStatus } from '../../../../models/IStatus';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';


@Component({
  selector: 'app-language-preference',
  templateUrl: './language-preference.component.html',
})
/** add-user component*/
export class LanguagePreferenceComponent implements OnInit {
  /** add-user ctor */
  languagePreferenceForm: FormGroup;
  customerId: any;
  isSubmitted: boolean = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _authService: AuthService,

    private _profileService: ProfileService

  ) {
    let customerState: any = this._authService.userState.value;
    this.customerId = customerState.id;
  }

  ngOnInit(): void {
    this.languagePreferenceForm = this._formBuilder.group({
      language: new FormControl(true, [Validators.required]),
    });

  }

  onSubmit() {
    this.isSubmitted = true;
    for (const i in this.languagePreferenceForm.controls) {
      this.languagePreferenceForm.controls[i].markAsDirty();
      this.languagePreferenceForm.controls[i].updateValueAndValidity();
    }
    if (this.languagePreferenceForm.valid)
      if (this.customerId) {
        console.log(this.customerId);

        let data = {
          ...this.languagePreferenceForm.value,
          customerID: this.customerId,
        };
        this._profileService.addLanguagePreference(data).subscribe(
          (res: IStatus) => {
            console.log(res);
            this._router.navigateByUrl('/wazen/profile/my-account');
            this.isSubmitted = false;
          },
          (error) => (this.isSubmitted = false)
        );
      }
      else this.isSubmitted = false;
  }


}
