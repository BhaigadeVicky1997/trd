import { IStatus } from './IStatus';

export interface IQuote {
  quoteRequestID: string,
  liabilityOfDetermination: string,
  quotationPrice: string,
  quoteExpiryTimer: Date,
  deduction: string,
  addAddionalCoverage: string,
  quoteRes: string,
  customerId: string,
  insuranceType: string,
  insuranceCompanyName: string,
}
export interface IQuoteResponse extends IStatus {
  data: IQuote;
}
export interface AdditionalCover {
  featureCode: string;
  featureDesc: string;
  featureAmount: number;
  taxAmount: number;
}

export interface PremiumBreakdown {
  typeCode: string;
  amount: number;
  percentage: number;
}

export interface DiscountBreakdown {
  typeCode: string;
  amount: number;
  percentage: number;
}

export interface PremiumDetail {
  deductable?: any;
  grossPremium: number;
  totalDiscount: number;
  premiumExcVat: number;
  totalTax: number;
  totalPremium: number;
  additionalCovers: AdditionalCover[];
  premiumBreakdown: PremiumBreakdown[];
  discountBreakdowns: DiscountBreakdown[];
}

export interface Quote {
  vehicleId: string;
  quotationNo: string;
  product: string;
  companyName: string;
  icid:string;
  premiumDetails: PremiumDetail[];
}

export interface IQuote {
  customerid: string;
  quoteRequestRefNo: string;
  quote: Quote[];
}