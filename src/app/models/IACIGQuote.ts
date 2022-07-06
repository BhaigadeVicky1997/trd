import { IACIGPremiumDetails } from "./IACIGPremiumDetails";

export interface IACIGQuote {
    vehicleId:string,
    QuatationNo:string,
    product:string,
    companyName:string,
    premiumDetails:IACIGPremiumDetails
}