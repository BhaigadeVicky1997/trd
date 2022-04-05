import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFaqsResponse } from '../models/IFaq';

import { IStatus } from '../models/IStatus';
import { AppConstants } from '../utils/app.constants';

@Injectable()
export class FaqService {

  constructor(private _httpClient: HttpClient) { }

  getFaqs(): Observable<IFaqsResponse> {
    return this._httpClient.get<IFaqsResponse>(`${AppConstants.GET_ALL_FAQS}`);
  }

}
