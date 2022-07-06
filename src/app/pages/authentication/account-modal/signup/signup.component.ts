import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GlobalService } from 'src/app/services/global.service';
import { SharedUtils } from 'src/app/utils/shared-utils';
import { ICustomerResponse } from '../../../../models/ICustomer';
import { IStatus } from '../../../../models/IStatus';
import { ProfileService } from '../../../../services/profile.service';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  host: {
    class: 'tab-pane fade show',
    id: 'signup-contanier',
    role: 'tabpanel',
    'aria-labelledby': 'signup-tab',
  },
})
export class SignupComponent implements OnInit {
  customerSignup: FormGroup;
  isSubmitted: boolean = false;
  passwordVisible = false;
  formType: boolean = false;
  isEmailExist: boolean = false;
  isMobileExist: boolean = false;
  @ViewChild('signInButton') signInButton;
  customerId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    public _sharedUtils: SharedUtils,
    private _authService: AuthService,
    private _profileService: ProfileService,
    private _router: Router,
    private _globalService: GlobalService
  ) {
    this.formType =
      this._activeRoute.snapshot.data.type &&
      this._activeRoute.snapshot.data.type == 'edit';
    let userState: any = this._authService.userState.value;
    this.customerId = userState.id;
  }

  ngOnInit(): void {
    this.customerSignup = this._formBuilder.group({
      salutation: new FormControl("1"),
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+$'),
      ]),
      nationalID: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[1|2|7]+[0-9]{9}$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      terms: new FormControl(true, [Validators.required]),
    });
    this.customerId && this.getCustomerById();
    this._globalService.quoteUser.subscribe((res) => {
      if (Object.keys(res).length) {
        this.customerSignup.patchValue(res);
      }
    });
  }

  onSignup() {
    
    this.isSubmitted = true;
    for (const i in this.customerSignup.controls) {
      this.customerSignup.controls[i].markAsDirty();
      this.customerSignup.controls[i].updateValueAndValidity();
    }
    if (this.customerSignup.valid) {
      this._authService.signup(this.customerSignup.value).subscribe(
        (res: any) => { 
          console.log(res);
          if (res.succeeded) {
            if (res.data) this._globalService.customerId.next(res.data.id);
            this.isEmailExist = false;
            this.isMobileExist = false;
            this._sharedUtils.showToast('Please verify your email', '1');
            $('#account-popup').modal('hide');
            $('#email-verification-popup').modal('show');
            this.customerSignup.reset();
          } else {
            if(res.message === 'User Already Exist'){
              this._sharedUtils.showToast('User Already Exist', 0);
              this.isSubmitted = false;
              return;
            }
            else if (
              JSON.stringify(res.data.email) ===
              JSON.stringify(this.customerSignup.get('email').value)
            ) {
              this.isEmailExist = true;
              this.isMobileExist = false;
            } 
            else if (
              JSON.stringify(res.data.mobile) ===
              JSON.stringify(this.customerSignup.get('contact').value)
            ) {
              this.isMobileExist = true;
              this.isEmailExist = false;
            }
            this._sharedUtils.showToast('Something went wrong', 0);
          }

          this.isSubmitted = false;
        },
        (error) => (this.isSubmitted = false)
      );
    }
  }

  getCustomerById() {
    this._profileService
      .getCustomerById(this.customerId)
      .subscribe((res: ICustomerResponse) => {
        console.log(res);
        if (res.succeeded) {
          let customer = {
            salutation: res.data.salutation,
            firstName: res.data.englishFirstName,
            lastName: res.data.englishLastName,
            nationalID: res.data.nationalID,
            email: res.data.email,
            contact: res.data.mobile,
            password: res.data.password,
            confirmPassword: res.data.password,
          };
          this.customerSignup.patchValue(customer);
        }
      });
  }

  OnEditProfile() {
    this.isSubmitted = true;
    for (const i in this.customerSignup.controls) {
      this.customerSignup.controls[i].markAsDirty();
      this.customerSignup.controls[i].updateValueAndValidity();
    }
    if (this.customerSignup.valid) {
      if (this.customerId) {
        let data = {
          ...this.customerSignup.value,
          id: this.customerId,
          salutation: this.customerSignup.value.salutation,
          englishFirstName: this.customerSignup.value.firstName,
          englishLastName: this.customerSignup.value.lastName,
          mobile: this.customerSignup.value.contact,
        };
        this._profileService.updateCustomer(data).subscribe(
          (res: IStatus) => {
            console.log(res);
            if (res.succeeded) {
              this._sharedUtils.showToast('Updated', 2);
              this._router.navigateByUrl('/wazen/profile/my-account');
            } else this.isSubmitted = false;
          },
          (error) => (this.isSubmitted = false)
        );
      }
    } else this.isSubmitted = false;
  }
  changeTabToSignin() {
    $('[href="#login-contanier"]').tab('show');
  }
}
