import { IPolicyResponse } from 'src/app/models/IPolicy';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOtpSend, IOtpSendResponse } from './../models/IOtpSend';
import { AppConstants } from '../utils/app.constants';
import { IQuoteResponse } from '../models/IQuote';
import { IVehicleImageResponse } from '../models/IVehicleImage';
import { IStatus } from '../models/IStatus';
import { IFileUploadResponse } from '../models/IFileUpload';
import { IVehicleResponse } from '../models/IVehicles';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private _httpClient: HttpClient) {}

  getOtpByNationalId(Id: number, Dob: string): Observable<IOtpSendResponse> {
    return this._httpClient.get<IOtpSendResponse>(
      `${AppConstants.GET_QUOTE_BY_NATIONALID}?NIN=${Id}&DateOfBirth=${Dob}`
    );
  }
  getOtpByCustomerId(Id: string): Observable<IOtpSendResponse> {
    return this._httpClient.get<IOtpSendResponse>(
      `${AppConstants.SEND_OTP + '?customerId='}${Id}`
    );
  }

  getOtpVerify(CustomerId: any, otp: any): Observable<IOtpSendResponse> {
    return this._httpClient.get<IOtpSendResponse>(
      `${
        AppConstants.GET_QUOTE_VERIFY_OTP + '?CustomerID='
      }${CustomerId}+${'&VerifyCode='}${otp}`
    );
  }

  addNewVehicalBySequenceCustomerId(
    CustomerId?: any,
    sequenceNumebr?: any
  ): Observable<any> {
    return this._httpClient.get<any>(
      `${AppConstants.ADD_VEHICLE_SEQUENCE_CUSTOMERID}?SequenceNumber=${sequenceNumebr}&CustomerId=${CustomerId}`
    );
  }
  addNewVehicalByForCancelPolicy(CustomerId: any, data: any): Observable<any> {
    return this._httpClient.get<any>(
      `${AppConstants.ADD_VEHICLE_FOR_CANCEL_POLICY}?SequenceNumber=${data.sequenceNumber}&PolicyNumber=${data.policyNumber}&InsuranceCompanyName=${data.insuranceCompany}`
    );
  }

  getVehicleByCutomerId(CustomerId: any, policyType='ALL'): Observable<IVehicleResponse> {
    return this._httpClient.get<IVehicleResponse>(
      `${AppConstants.GET_VEHICLE_BY_CUSTOMER_ID}?CustomerId=${CustomerId}`
    );
  }

  getSelectedVehicleByCutomerId(CustomerId: any): Observable<IPolicyResponse> {
    return this._httpClient.get<IPolicyResponse>(
      `${AppConstants.GET_SELECTED_VEHICLE_BY_CUSTOMER_ID}${CustomerId}`
    );
  }

  getVehicleByVehicleId(vehicleId: any): Observable<IPolicyResponse> {
    return this._httpClient.get<IPolicyResponse>(
      `${AppConstants.GET_VEHICLE_BY_CUSTOMER_ID}?id=${vehicleId}`
    );
  }

  getAllEducation(): Observable<any> {
    return this._httpClient.get<any>(`${AppConstants.GET_ALL_EDUCATION}`);
  }

  getAllViolationType(): Observable<any> {
    return this._httpClient.get<any>(`${AppConstants.GET_ALL_VIOLATION_TYPE}`);
  }

  addVehicleViolation(vehicleData): Observable<any> {
    return this._httpClient.post<any>(
      `${AppConstants.ADD_VEHICLE_VIOLATION}`,
      vehicleData
    );
  }

  getAllVehicleDataByVehicleID(vehicleId: any): Observable<any> {
    return this._httpClient.get<IPolicyResponse>(
      `${AppConstants.GET_ALL_VEHICLE_BY_VEHICLE_ID}?VehicleId=${vehicleId}`
    );
  }

  getquoteresponse(CustomerId: any): Observable<IQuoteResponse> {
    return this._httpClient.get<IQuoteResponse>(
      `${
        AppConstants.GET_QUOTE_RESPONSE_BY_CUSTOMER_ID +
        'CustomerID?CustomerID='
      }${CustomerId}`
    );
  }

  deleteVehicleViolationById(violationId: any): Observable<any> {
    return this._httpClient.delete<any>(
      `${AppConstants.DELETE_VEHICLE_VIOLATION_BY_ID}?Id=${violationId}`
    );
  }

  updateVehicleViolationByID(violation: any): Observable<any> {
    return this._httpClient.put<any>(
      `${AppConstants.UPDATE_VEHICLE_VIOLATION_BY_ID}`,
      violation
    );
  }

  getAllMedicleIssues(): Observable<any> {
    return this._httpClient.get<any>(`${AppConstants.GET_ALL_MEDICLE_ISSUES}`);
  }

  getAllVehiclePurpose(): Observable<any> {
    return this._httpClient.get<any>(`${AppConstants.GET_ALL_VEHICLE_PURPOSE}`);
  }

  updateAllDriverVehicle(data: any): Observable<any> {
    return this._httpClient.post<any>(
      `${AppConstants.ADD_ALL_VEHICLE_BY_VEHICLE_ID}`,
      data
    );
  }

  getquoteResponseByType(
    CustomerId: any,
    VehicleId: any
  ): Observable<IQuoteResponse> {
    return this._httpClient.get<IQuoteResponse>(
      `${AppConstants.GET_QUOTE_RESPONSE_BY_CUSTOMER_ID_IN_TYPE}${CustomerId}?VehicleId=${VehicleId}`
    );
  }
  addVehicleImage(
    vehicleId: any,
    vehicleImage: any
  ): Observable<IVehicleImageResponse> {
    let data = {
      vehicleID: vehicleId,
      vehicleImages: vehicleImage,
    };
    return this._httpClient.post<IVehicleImageResponse>(
      `${AppConstants.ADD_VEHICLE_IMAGE_BY_VEHICLE_ID}`,
      data
    );
  }
  uploadVehicleImage(file: File): Observable<IFileUploadResponse> {
    const formData: FormData = new FormData();
    formData.append('uploadVehicleImage', file);
    return this._httpClient.post<IFileUploadResponse>(
      `${AppConstants.UPLOAD_VEHICLE_IMAGE_BY_VEHICLE_ID}`,
      formData
    );
  }
  sendMailToIc(type: number) {
    return this._httpClient.get<IStatus>(
      `${AppConstants.SEND_MAIL_TO_IC}?Type=${type}`
    );
  }
}
