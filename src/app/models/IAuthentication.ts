import { IStatus } from "./IStatus";

export interface IForgotUser {
  id: string;
  email: string;
  

}

export interface IForgotPasswordResponse extends IStatus {
  data: IForgotUser;
}


