import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAboutUsResponse } from '../models/IAboutUs';
import { IFaqsResponse } from '../models/IFaq';

import { IStatus } from '../models/IStatus';
import { ITermsAndConditionsResponse } from '../models/ITermsAndConditions';
import { AppConstants } from '../utils/app.constants';

@Injectable()
export class ContactUsService {

  constructor(private _httpClient: HttpClient) { }

  addContactUs(contactus: any): Observable<IStatus> {
    return this._httpClient.post<IStatus>(`${AppConstants.ADD_CONTACT_US}`, contactus);
  }

  getAboutus(): Observable<IAboutUsResponse> {
    return this._httpClient.get<IAboutUsResponse>(`${AppConstants.GET_ABOUT_US}`);
  }

  getTerms(): Observable<ITermsAndConditionsResponse> {
    return this._httpClient.get<ITermsAndConditionsResponse>(`${AppConstants.GET_TERMS_AND_CONDITIONS}`);
  }


}