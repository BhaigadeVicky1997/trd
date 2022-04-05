import { IStatus } from './IStatus';

export interface IClaimPolicyResponse extends IStatus {
  data: any;
}

export interface IClaimPolicy {
  policyID: string;
  policyNumber: string;
  najmCaseNumber: string;
  nationalIDIQAMACR: string;
  claimReferenceNo: string;
  claimType: string;
  subcategoryforclaim: string;
  claimRequestDate: string;
  dateofLoss: string;
  typeofDamage: string;
  dateofaccident: string;
  accidentInformation: string;
  death: boolean;
  dInsuredDriver: string;
  dOtherVehicle: boolean;
  dNumberofPassenger: number;
  bodilyInjured: boolean;
  biInsuredDriver: string;
  biOtherVehicle: true;
  biNumberofPassenger: number;
  driver: string;
  numberofPassenger: number;
  status: boolean;
  action: string;
}
