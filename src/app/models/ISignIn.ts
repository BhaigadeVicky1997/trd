import { IStatus } from './IStatus';

export interface ISignIn {
  // id: string;
  // englishFirstName: string;
  // email: string;
  // mobile: string;
  id: string;
  salutation: string;
  englishFirstName: string;
  englishMiddleName?: any;
  englishLastName: string;
  arabicFirstName?: any;
  arabicMiddleName?: any;
  arabicLastName?: any;
  address?: any;
  nationalID: string;
  iqama?: any;
  companyCR?: any;
  email: string;
  mobile: string;
  telephoneNumber?: any;
  dateOfBirth: Date;
  gender?: any;
  occupation: number;
  educationID: number;
  maritalStatusID: number;
  isActive: boolean;
  newsLetterSubscription: boolean;
  createdOn: Date;
  modifiedBy: number;
  modifiedOn: Date;
  driverID?: any;
  occupationName?: any;
  educationName?: any;
  maritalStatusName?: any;
  password: string;
  language: string;
  isVerified: boolean;
  grandFatherName?: any;
  subtribeName?: any;
  familyName?: any;
  englishSecondName?: any;
  englishThirdName?: any;
  dateOfBirthH?: any;
  licenseList11?: any;
  idExpiryDate?: any;
  occupationCode?: any;
  socialStatusCode?: any;
  logId?: any;
  idIssuePlace?: any;
  token: string;
}

export interface ISignInResponse extends IStatus {
  data: ISignIn;
}

export interface ISocialSignIn {
  customerID: string;
  emailAddress: string;
  id: string;
  loginType: string;
  firstName: string;
  lastName: string;
}

export interface ISocialSignInResponse extends IStatus {
  data: ISocialSignIn;
}
