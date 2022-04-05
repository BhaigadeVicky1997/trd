import { IStatus } from './IStatus';

export interface ICustomerTransaction {
  id: string;
  customerID: string;
  transaction: string;
  policyNumber: string;
  status: string;
  bankName: string;
  ibanNo: string;
  swiftCode: string;
  invoiceDetails: string;
  anyOtherInformation: string;
  paymentMethod: string;
  cardDetails: string;
  transactionDate: string;
}
export interface ICustomerTransactionResponse extends IStatus {
  data: ICustomerTransaction[];
}
