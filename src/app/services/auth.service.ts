import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IForgotPasswordResponse } from '../models/IAuthentication';
import {  ToastrService } from 'ngx-toastr';
import {
  ISignIn,
  ISignInResponse,
  ISocialSignIn,
  ISocialSignInResponse,
} from '../models/ISignIn';
import { IStatus } from '../models/IStatus';
import { IVerifyCodeResponse } from '../models/IVerifyCode';
import { AppConstants } from '../utils/app.constants';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userState: BehaviorSubject<{}> = new BehaviorSubject<{}>(null);
  userFlagForSpecialCase: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  constructor(
    private _ToastrService:ToastrService,
    private _router: Router,
    private _httpClient: HttpClient,
    private _globalService: GlobalService
  ) {
    this.loadToken();
  }

  loadToken() {
    const user = this.getUserJson();
    if (Object.keys(user).length) this._globalService.customerId.next(user.id);
    this.userState.next(user);
  }

  signin(user, rememberMe): Observable<ISignInResponse> {
    let signinData = {
      email: user.username,
      password: user.password,
    };
    return this._httpClient
      .post<IStatus>(`${AppConstants.GET_CUSTOMER_LOGIN}`, signinData)
      .pipe(
        tap((res: any) => {
          console.log(res);
          if (res) {
            if (res.isAuthenticated) {
              let data = {
                id: res.data?.id,
                // englishFirstName: res.data.englishFirstName,
                email: res.data?.email,
                password: signinData.password,
                username: res.data?.userName,
                // mobile: res.data.mobile,
              };
              this.setUser(data);
            } else {
              this._ToastrService.error(res.message)
              this._globalService.customerId.next(res.data.id);
            }
          }
        })
      );
  }

  signinUsingSocialAccount(user: any): Observable<ISocialSignInResponse> {
    return this._httpClient
      .post<ISocialSignInResponse>(`${AppConstants.CUSTOMER_SIGNUP}`, user)
      .pipe(
        tap((res: ISocialSignInResponse) => {
          if (res.succeeded && res.data) {
            this.setUser(res.data);
          }
        })
      );
  }

  //signup(user): Observable<IStatus> {
  //  return this._httpClient.post<IStatus>(`${Constants.SIGNUP}`, user);
  //}

  //getMenus() {
  //  let param = { role: this.getUserJson().role };
  //  return this._httpClient.post(`${Constants.GET_MENU}`, param);
  //}

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.userState.next({});
    this._router.navigateByUrl('/wazen');
    window.location.reload();
  }

  getUserJson(): ISignIn {
    // let user = JSON.parse(localStorage.getItem(AppConstants.REMEMBER_ME))
    //   ? localStorage.getItem(AppConstants.USER_TOKEN)
    //   : sessionStorage.getItem(AppConstants.USER_TOKEN);
    let user = localStorage.getItem(AppConstants.USER_DATA);
    if (user) {
      return JSON.parse(atob(user)) as ISignIn;
    } else {
      return {} as ISignIn;
    }
  }

  forgotPassword(email): Observable<IForgotPasswordResponse> {
    return this._httpClient.get<IForgotPasswordResponse>(
      `${AppConstants.FORGOT_PASSWORD}${email}`
    );
  }

  submitVerifyCode(customerId, verifycode): Observable<IVerifyCodeResponse> {
    return this._httpClient.get<IVerifyCodeResponse>(
      `${AppConstants.SUBMIT_VERIFY_CODE}?ID=${customerId}&VerifyCode=${verifycode}`
    );
  }

  resetPassword(customer): Observable<IStatus> {
    return this._httpClient.put<IStatus>(
      `${AppConstants.UPDATE_PASSWORD}`,
      customer
    );
  }

  signup(customer): Observable<any> {
    // let signupData = {
    //   salutation: customer.salutation,
    //   englishFirstName: customer.firstName,
    //   englishLastName: customer.lastName,
    //   email: customer.email,
    //   mobile: customer.contact,
    //   password: customer.password,
    //   nationalID: customer.nationalID,
    // };
    let signupData = {
      salutationId: parseInt(customer.salutation),
      firstName: customer.firstName,
      lastName: customer.lastName,
      nationalIdTypeId: 2,
      nin: customer.nationalID,
      // customer.nationalID
      roleName: 'CUSTOMER',
      email: customer.email,
      password: customer.password,
      mobile: customer.contact,
    };
    console.log(signupData);
    return this._httpClient
      .post<IStatus>(`${AppConstants.CUSTOMER_SIGNUP}`, signupData)
      .pipe(
        tap((res: any) => {
          console.log(res);
          if (res.succeeded == true) {
            this._globalService.customerId.next(res.id);
            this.userFlagForSpecialCase.subscribe((flag) => {
              if (flag == true) {
                this._globalService.customerId.subscribe((customerID) => {
                  const tempCustID = localStorage.getItem('tempCustomer_ID');
                  console.log(tempCustID,customerID)
                  this._httpClient.get<any>(
                    `${AppConstants.CREATE_VEHICLE_DRIVER_BY_TEMPCUSTOMERID}?TempCustomerId=${tempCustID}&CustomerId=${customerID}`
                  ).subscribe(res=>{
                    console.log(res)
                  })
                });
              }
            });
          }
        })
      );
  }

  setUser(customer: any) {
    console.log(customer);
    let data = {
      id: customer.id,
      username: customer.username,
      email: customer.email,
      // mobile: customer.mobile,
    };
    let token = btoa(JSON.stringify(data));
    this._globalService.customerId.next(customer.id);
    localStorage.setItem(AppConstants.USER_DATA, token);
    localStorage.setItem(AppConstants.USER_TOKEN, customer.token),
      localStorage.setItem(AppConstants.USER_DATA, btoa(JSON.stringify(data)));
    let user = this.getUserJson();
    this.userState.next(user);
  }

  //getUserById(Id): Observable<IResetPasswordResponse> {
  //  return this._httpClient.get<IResetPasswordResponse>(
  //    `${AppConstants.GET_USER_BY_ID}${Id}`
  //  );
  //}

  createCustomerLogin(customer) {
    let customerLoginData = {
      customerID: this._globalService.customerId.value,
      emailAddress: customer.email,
      password: customer.password,
    };
    return this._httpClient.put<IStatus>(
      `${AppConstants.UPDATE_CUSTOMER_LOGIN}`,
      customerLoginData
    );
  }

  updateCustomer(customer) {
    let customerData = {
      id: this._globalService.customerId.value,
      salutation: customer.salutation,
      englishFirstName: customer.firstName,
      englishLastName: customer.lastName,
      email: customer.email,
      mobile: customer.contact,
      password: customer.password,
      nationalID: customer.iqama,
    };
    return this._httpClient.put<IStatus>(
      `${AppConstants.UPDATE_CUSTOMER}`,
      customerData
    );
  }

  loginCustomer(customer) {
    let response1 = this.updateCustomer(customer);
    let response2 = this.createCustomerLogin(customer);
    return forkJoin([response1, response2]);
  }

  verifyCustomer(customerId, verifycode): Observable<IVerifyCodeResponse> {
    return this._httpClient
      .get<IVerifyCodeResponse>(
        `${AppConstants.VERIFY_CUSTOMER_OTP}?CustomerID=${customerId}&VerifyCode=${verifycode}`
      )
      .pipe(
        tap((res: IVerifyCodeResponse) => {
          if (res.succeeded && res.data) {
            this.setUser(res.data);
          }
        })
      );
  }

  resendVerificationOTP(customerId: string): Observable<IStatus> {
    return this._httpClient.get<IStatus>(
      `${AppConstants.RESEND_VERIFY_CUSTOMER_OTP}?CustomerID=${customerId}`
    );
  }
}
