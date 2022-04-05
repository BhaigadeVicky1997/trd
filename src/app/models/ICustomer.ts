import { IStatus } from './IStatus';

export interface ICustomers {
  id: string;
  salutation: string;
  englishFirstName: string;
  englishLastName: string;
  arabicFirstName: string;
  arabicLastName: string;
  nationalID: string;
  IQAMA: string;
  email: string;
  mobile: string;
  password: string;
  newsLetterSubcription: boolean;

   
}

export interface ICustomerResponse extends IStatus {
  data: any;
}
