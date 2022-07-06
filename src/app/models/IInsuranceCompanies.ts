import { IStatus } from './IStatus';

export interface IInsuranceCompanies {
  icid:string;
  nameoftheIC:string;
}

export interface IInsuranceCompaniesResponse extends IStatus {
  data: any;
}
