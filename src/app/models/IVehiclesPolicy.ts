export interface IVehiclesPolicy {
  id: number;
  vehicleId: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleNumber: string;
  policyType: string;
  policyName: string;
  expiryDate: string;
  premiumDetails: PremiumDetail;
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
  deductable?: number;
  grossPremium: number;
  totalDiscount: number;
  premiumExcVat: number;
  totalTax: number;
  totalPremium: number;
  additionalCovers: AdditionalCover[];
  premiumBreakdown: PremiumBreakdown[];
  discountBreakdowns: DiscountBreakdown[];
}
