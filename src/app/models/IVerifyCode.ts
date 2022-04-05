import { IStatus } from "./IStatus";

export interface IVerify {
  id: string;
  verifycode: string;
}

export interface IVerifyCodeResponse extends IStatus {
  data: IVerify;
}


