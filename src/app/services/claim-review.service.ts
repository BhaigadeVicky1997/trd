import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../models/IStatus';
import { AppConstants } from '../utils/app.constants';

@Injectable()
export class ClaimReviewService {
    constructor(private _httpClient: HttpClient) {

    }

  getClaims(): Observable<IStatus> {
    return this._httpClient.get<IStatus>(`${AppConstants.GET_POLICY_CLAIMS}`);
  }

}
