import { IStatus } from './IStatus';

export interface ICustomerLogins {
  id: string;
  customerId: string;
  languagePreference: string;

   
}

export interface ICustomerLoginResponse extends IStatus {
  data: any;
}
