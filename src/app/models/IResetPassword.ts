import { IStatus } from "./IStatus";

export interface IResetUser {
  id: string;
  email: string;
  

}

export interface IResetPasswordResponse extends IStatus {
  data: IResetUser;
}


