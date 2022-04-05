import { IStatus } from './IStatus';

export interface IQuoteResponse {
  quoteRequestID: string,
  liabilityOfDetermination: string,
  quotationPrice: string,
  quoteExpiryTimer: Date,
  deduction: string,
  qddAddionalCoverage: string,
  quoteRes: string,
  customerId: string,
  insuranceType: string,
  insuranceCompanyName: string,
}
export interface IQuoteResponse extends IStatus {
  data: IQuoteResponse[];
}
