import { IStatus } from './IStatus';

export interface IOtpSend {
  nationalID: string;
  dateOfBirth: string;
  emailAddress: string;
  customerID: string;
  verifyCode: string;

}


export interface IOtpSendResponse extends IStatus {
  data: any;
}

