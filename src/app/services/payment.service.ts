import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../utils/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _httpClient: HttpClient) { }

  getInvoice() {
    return this._httpClient.get(`${AppConstants.GET_INVOICE}`);
  }
}
