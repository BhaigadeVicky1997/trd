import { IStatus } from "./IStatus";

export interface IContactUs {
    id:number;
    customerID:string;
    customerName:string;
    customerEmailID:string;
    complaintType:string;
    complaintPriority:string;
    subject:string;
    complaintMessage:string;
}

export interface IContactUsResponse extends IStatus {
  data: any;
}
