import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInsuranceCompaniesResponse } from '../models/IInsuranceCompanies';
import { AppConstants } from '../utils/app.constants';

@Injectable()
export class InsuranceCompaniesService {
    constructor(private _httpClient: HttpClient) {

    }

  getInsuranceCompanies(): Observable<IInsuranceCompaniesResponse> {
    return this._httpClient.get<IInsuranceCompaniesResponse>(`${AppConstants.GET_ALL_INSURANCE_COMPANIES_NAMES}`);
  }

}
