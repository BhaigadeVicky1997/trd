import { IStatus } from "./IStatus";

export interface ITermsAndConditions {
  id: string;
  content: string;
}

export interface ITermsAndConditionsResponse extends IStatus {
  data: any;
}