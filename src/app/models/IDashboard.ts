import { IStatus } from "./IStatus";

export interface IDashboardBanner {
  id: string;
  imageSource: string;
  productID: string;
  isActive: string;
}

export interface IDashboardBannerResponse extends IStatus {
  data: IDashboardBanner[];
}

export interface IDashboardPartnerLogo{
  id: string;
  aboutUs: string;
  termsAndCondition: string;
  partnerName: string;
  partnerLogo: string;
  redirectedURL: string;
  status: string;
  nameOfTheCompany: string;
  address: string;
  contactNo: string;
  emailAddress: string;
  socialMediaIcon: string;
  socialMediaLink: string;
  websiteLink: string;
  googleLocation: string;
}

export interface IDashboardPartnerLogoResponse extends IStatus {
  data: any;
}

