import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICustomerResponse } from '../models/ICustomer';
import { ICustomerTransactionResponse } from '../models/ICustomerTransaction';
import { IStatus } from '../models/IStatus';
import { AppConstants } from '../utils/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public onMyAccountTabChanged: Subject<string> = new Subject();

  constructor(private _httpClient: HttpClient) {}

  getMyTransactions(
    customerId: string
  ): Observable<ICustomerTransactionResponse> {
    return this._httpClient.get<ICustomerTransactionResponse>(
      `${AppConstants.GET_CUSTOMER_TRANSACTION_BY_CUSTOMER_ID}?CustomerID=${customerId}`
    );
  }
  getMyTransactionsByDate(
    customerId,
    from,
    to
  ): Observable<ICustomerTransactionResponse> {
    return this._httpClient.get<ICustomerTransactionResponse>(
      `${AppConstants.GET_CUSTOMER_TRANSACTION_BY_DATE}?CustomerID=${customerId}&from=${from}&to=${to}`
    );
  }

  getCustomerById(customerId): Observable<ICustomerResponse> {
    return this._httpClient.get<ICustomerResponse>(
      `${AppConstants.GET_CUSTOMER_BY_ID}${customerId}`
    );
  }

  updateCustomer(customer: any): Observable<IStatus> {
    return this._httpClient.put<IStatus>(
      `${AppConstants.UPDATE_CUSTOMERS}`,
      customer
    );
  }

  changePassword(customer): Observable<IStatus> {
    return this._httpClient.put<IStatus>(
      `${AppConstants.CHANGE_PASSWORD}`,
      customer
    );
  }

  addNewsLetterSubcription(newsLetterSubscription: any): Observable<IStatus> {
    return this._httpClient.put<IStatus>(`${AppConstants.NEWS_SUBCRIPTION}`, newsLetterSubscription);
  }

  addLanguagePreference(language: any): Observable<IStatus> {
    return this._httpClient.put<IStatus>(`${AppConstants.LANGUAGE_PREFERENCE}`, language);
  }

}
