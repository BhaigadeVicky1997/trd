import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaymentAmt } from '../models/IPaymentAmt';
import { AppConstants } from '../utils/app.constants';

@Injectable({
  providedIn: 'root',
})
export class PaymentformService {
  constructor(private _httpClient: HttpClient) {}

  getPaymentForm(paymentAmt: IPaymentAmt): Observable<any> {
    return this._httpClient.post<any>(
      `${AppConstants.GET_PAYMENT_FORM}`,
      paymentAmt
    );
  }
}
