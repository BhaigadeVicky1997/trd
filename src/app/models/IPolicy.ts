import { IStatus } from './IStatus';

export interface IPolicy{
    id: string,
    customerID: string,
    purchaseService: string,
    cancellation: string,
    reasonforCancellation: string,
    claimIfAny: string,
    insuranceCompanyName: string,
    insuranceType: string,
    policyName: string,
    policyType: string,
    startDate: string,
    expiryDate: string,
    policyNo: string,
    status: string,
    registrationType: string,
    registrationNumber: string,
    sequenceNo: string,
    cancellationReason: string,
    effectiveCancellationDate: string,
    locoftheDamagedVehicle: string,
    servicesAddonsTypes: string,
    listofAbandonedQuotes: string,
    requestDateTime: string,
    vehicleID: string,
    vehicleModel:string,
    vehicleNumber:string,
    vehicleMake:string,
    nameoftheIC: string,
    description: string,
    policyPriced: string,
    policyAmountPaid: string,
    coverNote: string,
    imagesUploaded: string,
    premiumAmount: string,
    additionalCoverageAmount: string,
    serviceChargeAmount: string,
    vat: string,
    groundTotal: string
}

export interface IPolicyResponse extends IStatus {
  data: IPolicy[];
}





