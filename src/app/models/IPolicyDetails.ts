import { IStatus } from './IStatus';

export interface IPolicyDetails{
  policyNo: string,
  insuranceCompanyName: string,
  policyType: string,
  vehicleModel: string,
  vehicleMake: string,
  registrationNumber: string,
  vehicleNumber: string,
  effectiveCancellationDate: string,
  startDate: string,
  expiryDate: string,
  status: string,
  premiumAmount: string,
  additionalCoverageAmount: string,
  serviceChargeAmount: string,
  vat: string,
  groundTotal: string,
  id: string,
  customerID: string,
  purchaseService: string,
  cancellation: string,
  reasonforCancellation: string,
  claimIfAny: string,
  insuranceType: string,
  policyName: string,
  registrationType: string,
  sequenceNo: string,
  cancellationReason: string,
  locoftheDamagedVehicle: string,
  servicesAddonsTypes: string,
  listofAbandonedQuotes: string,
  requestDateTime: string,
  vehicleID: string,
  nameoftheIC: string,
  description: string,
  policyPriced: string,
  policyAmountPaid: string,
  coverNote: string,
  imagesUploaded: string,
}

export interface IPolicyDetailsResponse extends IStatus {
  data: IPolicyDetails;
}





