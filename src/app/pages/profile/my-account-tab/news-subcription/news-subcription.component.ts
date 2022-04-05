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
  selector: 'app-news-subcription',
  templateUrl: './news-subcription.component.html',
})
/** add-user component*/
export class NewsSubcriptionComponent implements OnInit {
  /** add-user ctor */
  newsSubcriptionForm: FormGroup;
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
    this.newsSubcriptionForm = this._formBuilder.group({
      newsLetterSubscription: new FormControl(true, [Validators.required]),
    });
  }

  onSubmit() {
    console.log('customerId', this.customerId);

    this.isSubmitted = true;

    if (this.newsSubcriptionForm.valid)
      if (this.customerId) {
        let data = {
          ...this.newsSubcriptionForm.value,
          id: this.customerId,
        };
        console.log(data);

        this._profileService.addNewsLetterSubcription(data).subscribe(
          (res: IStatus) => {
            console.log(res);
            this._router.navigateByUrl('/wazen/profile/my-account');
            this.isSubmitted = false;
          },
          (error) => (this.isSubmitted = false)
        );
      } else this.isSubmitted = false;
  }
}
