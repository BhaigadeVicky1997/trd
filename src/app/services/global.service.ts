import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStatus } from '../models/IStatus';
import { AppConstants } from '../utils/app.constants';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public customerId: BehaviorSubject<string> = new BehaviorSubject(null);
  public quoteUser: BehaviorSubject<{}> = new BehaviorSubject({});
  public resetEmail: BehaviorSubject<string> = new BehaviorSubject('');
  public vehicalLocalList: BehaviorSubject<[]> = new BehaviorSubject([]);
  public claimPolicy: BehaviorSubject<any> = new BehaviorSubject({});
  public selectedPolicyForVehicles: BehaviorSubject<any> = new BehaviorSubject(
    []
  );
  public vehiclePolicies: BehaviorSubject<any> = new BehaviorSubject([]);
  public cancelVehicleDetails: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _httpClient: HttpClient) {}
  sendOTP(customerId): Observable<IStatus> {
    return this._httpClient.get<IStatus>(
      `${AppConstants.SEND_OTP}?customerId=${customerId}`
    );
  }
  addPlicyClaim(claim: any): Observable<IStatus> {
    return this._httpClient.post<IStatus>(
      `${AppConstants.ADD_CLAIM_POLICY}`,
      claim
    );
  }
}
