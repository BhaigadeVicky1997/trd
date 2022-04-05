import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDashboardBannerResponse, IDashboardPartnerLogoResponse } from '../models/IDashboard';
import { AppConstants } from '../utils/app.constants';

@Injectable()
export class DashboardService {
    constructor(private _httpClient: HttpClient) {

    }

  getBanners(): Observable<IDashboardBannerResponse> {
    return this._httpClient.get<IDashboardBannerResponse>(`${AppConstants.GET_DASHBOARD_BANNER}`);
  }

  getPartnerLogo(): Observable<IDashboardPartnerLogoResponse> {
    return this._httpClient.get<IDashboardPartnerLogoResponse>(`${AppConstants.GET_PARTNER_LOGO}`);
  }
}
