import { IACIGAdditionalCovers } from "./IACIGAdditionalCovers";
import { IACIGDiscountBreakdown } from "./IACIGDiscountBreakdown";
import { IACIGPremiumBreakdown } from "./IACIGPremiumBreakdown";

export interface IACIGPremiumDetails {
    deductable:number,
    GrossPremium:number,
    TotalDiscount:number,
    PremiumExcVat:number,
    TotalTax:number,
    TotalPremium:number,
    AdditionalCovers:IACIGAdditionalCovers,
    PremiumBreakdown:IACIGPremiumBreakdown,
    DiscountBreakdown:IACIGDiscountBreakdown

}