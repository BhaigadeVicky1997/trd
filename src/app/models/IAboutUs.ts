import { IStatus } from "./IStatus";

export interface IAboutUs {
  id: string;
  content: string;
  description:string;
}

export interface IAboutUsResponse extends IStatus {
  data: any;
}