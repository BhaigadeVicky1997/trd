import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPolicyResponse } from './../models/IPolicy';
import { IStatus } from './../models/IStatus';
import { AppConstants } from '../utils/app.constants';
import { IPolicyDetailsResponse } from '../models/IPolicyDetails';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  constructor(private _httpClient: HttpClient) {}
  addPolicy(policy: any): Observable<IStatus> {
    return this._httpClient.post<IStatus>(`${AppConstants.ADD_POLICY}`, policy);
  }

  getAllPolicy(): Observable<IPolicyResponse> {
    return this._httpClient.get<IPolicyResponse>(`${AppConstants.GET_POLICY}`);
  }

  getPolicyByCustomerId(Id: any): Observable<IPolicyResponse> {
    return this._httpClient.get<IPolicyResponse>(
      `${AppConstants.GET_POLICY_BY_ID}${Id}`
    );
  }

  getPolicyById(Id: any): Observable<IPolicyDetailsResponse> {
    return this._httpClient.get<IPolicyDetailsResponse>(
      `${AppConstants.GET_POLICY_BY_ID}?Policyid=${Id}`
    );
  }

  deletePolocy(id: any): Observable<IPolicyResponse> {
    return this._httpClient.delete<IPolicyResponse>(
      `${AppConstants.DELETE_POLICY}${id}`
    );
  }
}
