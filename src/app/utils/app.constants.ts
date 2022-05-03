import { environment } from '../../environments/environment';

export class AppConstants {
  public static API_ENDPOINT: string = environment.apiUrl;

  public static USER_TOKEN: string = 'USER-TOKEN';
  public static USER_DATA: string = 'USER-DATA';
  public static REMEMBER_ME: string = 'REMEMBER-ME';

  public static CUSTOMER_LOGIN: string = `${AppConstants.API_ENDPOINT}HomePageBanner/all`;
  public static RESET_PASSWORD: string = `${AppConstants.API_ENDPOINT}HomePageBanner/all`;
  public static GET_USER_BY_Email: string = `${AppConstants.API_ENDPOINT}HomePageBanner/all`;

  public static GET_DASHBOARD_BANNER: string = `${AppConstants.API_ENDPOINT}HomePageBanner/all`;
  public static GET_PARTNER_LOGO: string = `${AppConstants.API_ENDPOINT}StaticContent/all`;

  public static GET_ROLES: string = `${AppConstants.API_ENDPOINT}Role/all`;
  public static ADD_ROLES: string = `${AppConstants.API_ENDPOINT}Role/all`;

  public static GET_CUSTOMER_LOGIN: string = `${AppConstants.API_ENDPOINT}Customer/CustomerSignIn`;
  public static GET_USER_BY_ID: string = `${AppConstants.API_ENDPOINT}User/`;
  public static GET_USER_BY_EmailF: string = `${AppConstants.API_ENDPOINT}User/ForgotPassword/`;

  public static FORGOT_PASSWORD: string = `${AppConstants.API_ENDPOINT}Customer/ForgotCustomerPassword/`;
  public static UPDATE_PASSWORD: string = `${AppConstants.API_ENDPOINT}Customer/UpdateCustomerPassword/`;

  public static SUBMIT_VERIFY_CODE: string = `${AppConstants.API_ENDPOINT}Customer/CustomerVerify`;

  public static VERIFY_CUSTOMER_OTP: string = `${AppConstants.API_ENDPOINT}Customer/VerifyCustomerLoginOTP`;
  public static RESEND_VERIFY_CUSTOMER_OTP: string = `${AppConstants.API_ENDPOINT}Customer/ResendOTP`;

  public static UPDATE_CUSTOMER_LOGIN: string = `${AppConstants.API_ENDPOINT}Customer/UpdateCustomerEmailAndPassword`;
  public static UPDATE_CUSTOMER: string = `${AppConstants.API_ENDPOINT}Customer`;
  public static CUSTOMER_SIGNUP: string = `${AppConstants.API_ENDPOINT}Customer/CustomerSignUpWithOTP`;

  public static GET_CUSTOMER_TRANSACTION_BY_CUSTOMER_ID: string = `${AppConstants.API_ENDPOINT}CustomerTransaction/CustomerTransactionCtID`;
  public static GET_CUSTOMER_TRANSACTION_BY_DATE: string = `${AppConstants.API_ENDPOINT}CustomerTransaction/CustomerTransactionDate`;

  public static GET_POLICY: string = `${AppConstants.API_ENDPOINT}MyPolicy/all`;
  public static GET_POLICY_BY_ID: string = `${AppConstants.API_ENDPOINT}MyPolicy/`;
  public static GET_POLICY_BY_POICY_ID: string = `${AppConstants.API_ENDPOINT}MyPolicy`;
  public static ADD_POLICY: string = `${AppConstants.API_ENDPOINT}MyPolicy`;
  public static UPDATE_POLICY: string = `${AppConstants.API_ENDPOINT}MyPolicy`;
  public static DELETE_POLICY: string = `${AppConstants.API_ENDPOINT}MyPolicy/`;
  public static GET_CUSTOMER_TRANSACTION: string = `${AppConstants.API_ENDPOINT}CustomerTransaction/all`;

  public static GET_CUSTOMER_BY_ID: string = `${AppConstants.API_ENDPOINT}Customer/`;

  public static UPDATE_CUSTOMERS: string = `${AppConstants.API_ENDPOINT}Customer/`;

  //Get Quote//
  // public static GET_QUOTE_BY_NATIONALID: string = `${AppConstants.API_ENDPOINT}Customer/GetCustomerQuoteOTP`;
  public static GET_QUOTE_BY_NATIONALID: string = `${AppConstants.API_ENDPOINT}TempCustomer/GetQuoteByNINAndDOB`;
  public static GET_QUOTE_VERIFY_OTP: string = `${AppConstants.API_ENDPOINT}Customer/VerifyCustomerQuoteOTP`;
  // public static ADD_VEHICLE_SEQUENCE_CUSTOMERID: string = `${AppConstants.API_ENDPOINT}Vehicle/GetVehicleBySequenceNumber`;
  public static ADD_VEHICLE_SEQUENCE_CUSTOMERID: string = `${AppConstants.API_ENDPOINT}TempVehicle/tempVehicleBySequenceNumberAndCustomerId`;
  public static ADD_VEHICLE_FOR_CANCEL_POLICY: string = `${AppConstants.API_ENDPOINT}Vehicle/GetVehicleForCancelPolicy`;
  // public static GET_VEHICLE_BY_CUSTOMER_ID: string = `${AppConstants.API_ENDPOINT}CustomerVehicle/GetVByCustomerId/`;
  // public static GET_VEHICLE_BY_CUSTOMER_ID: string = `${AppConstants.API_ENDPOINT}TempVehicle/tempVehicleByCustomerId`;
  public static GET_VEHICLE_BY_CUSTOMER_ID: string = `${AppConstants.API_ENDPOINT}TempVehicle/GetVehicleDriverViolationListByCustomerId`;
  public static GET_SELECTED_VEHICLE_BY_CUSTOMER_ID: string = `${AppConstants.API_ENDPOINT}CustomerVehicle/GetCustomerSelectVehicleByCustomerId/`;

  // public static GET_ALL_EDUCATION: string = `${AppConstants.API_ENDPOINT}Education/all`;
  public static GET_ALL_EDUCATION: string = `${AppConstants.API_ENDPOINT}TempDriver/allEducation`;

  // public static GET_ALL_VIOLATION_TYPE: string = `${AppConstants.API_ENDPOINT}ViolationType/all`;
  public static GET_ALL_VIOLATION_TYPE: string = `${AppConstants.API_ENDPOINT}TempDriver/allViolationType`;
  // public static ADD_VEHICLE_VIOLATION: string = `${AppConstants.API_ENDPOINT}VehicleViolation`;
  public static ADD_VEHICLE_VIOLATION: string = `${AppConstants.API_ENDPOINT}TempDriver/AddVehicleViolation`;
  // public static GET_ALL_VEHICLE_BY_VEHICLE_ID: string = `${AppConstants.API_ENDPOINT}Vehicle/GetDriver_VehicleAndViolationDetailsByVehicleID/`;
  public static GET_ALL_VEHICLE_BY_VEHICLE_ID: string = `${AppConstants.API_ENDPOINT}TempDriver/DriverVehicleDetailByVehicleId`;
  // public static DELETE_VEHICLE_VIOLATION_BY_ID: string = `${AppConstants.API_ENDPOINT}VehicleViolation/`;
  public static DELETE_VEHICLE_VIOLATION_BY_ID: string = `${AppConstants.API_ENDPOINT}TempDriver/DeleteVehicleViolation`;
  public static UPDATE_VEHICLE_VIOLATION_BY_ID: string = `${AppConstants.API_ENDPOINT}VehicleViolation/`;
  // public static ADD_ALL_VEHICLE_BY_VEHICLE_ID: string = `${AppConstants.API_ENDPOINT}Vehicle/AddUpdateVehicleDriver`;
  public static ADD_ALL_VEHICLE_BY_VEHICLE_ID: string = `${AppConstants.API_ENDPOINT}TempDriver/AddandUpdateDriver`;
  // public static GET_ALL_MEDICLE_ISSUES: string = `${AppConstants.API_ENDPOINT}MedicalIssue/all`;
  public static GET_ALL_MEDICLE_ISSUES: string = `${AppConstants.API_ENDPOINT}TempDriver/allMedicalIssue`;
  // public static GET_ALL_VEHICLE_PURPOSE: string = `${AppConstants.API_ENDPOINT}VehiclePurpose/all`;
  public static GET_ALL_VEHICLE_PURPOSE: string = `${AppConstants.API_ENDPOINT}TempDriver/allVehiclePurpose`;

  public static CHANGE_PASSWORD: string = `${AppConstants.API_ENDPOINT}Customer/UpdateChangePassword`;

  public static GET_QUOTE_RESPONSE_BY_CUSTOMER_ID: string = `${AppConstants.API_ENDPOINT}QuoteResponse/`;
  public static GET_QUOTE_RESPONSE_BY_CUSTOMER_ID_IN_TYPE: string = `${AppConstants.API_ENDPOINT}QuoteResponse/`;

  public static ADD_VEHICLE_IMAGE_BY_VEHICLE_ID: string = `${AppConstants.API_ENDPOINT}VehicleImage`;
  public static NEWS_SUBCRIPTION: string = `${AppConstants.API_ENDPOINT}Customer/AddNewsLetter`;

  public static LANGUAGE_PREFERENCE: string = `${AppConstants.API_ENDPOINT}Customer/AddLanguagePreference`;

  public static UPLOAD_VEHICLE_IMAGE_BY_VEHICLE_ID: string = `${AppConstants.API_ENDPOINT}VehicleImage/UploadVehicleImage`;

  public static GET_INVOICE: string = `${AppConstants.API_ENDPOINT}MedicalIssue/GetBase64`;
  public static SEND_OTP: string = `${AppConstants.API_ENDPOINT}Customer/GetCustomersendOTP`;

  public static ADD_CLAIM_POLICY: string = `${AppConstants.API_ENDPOINT}PolicyClaim`;

  public static GET_PAYMENT_FORM: string = `${AppConstants.API_ENDPOINT}Payment/GetPaymentForm`;

  public static GET_ALL_INSURANCE_COMPANIES_NAMES: string = `${AppConstants.API_ENDPOINT}InsuranceCompanies/GetAllInsuranceCompaniesNames`;

  public static GET_POLICY_CLAIMS: string = `${AppConstants.API_ENDPOINT}abcd`;

  /*Faqs*/
  public static GET_ALL_FAQS: string = `${AppConstants.API_ENDPOINT}FAQ/GetAllFAQsByModule`;

  public static ADD_CONTACT_US: string = `${AppConstants.API_ENDPOINT}Complaint`;

  public static GET_ABOUT_US: string = `${AppConstants.API_ENDPOINT}AboutUs/all`;

  public static GET_TERMS_AND_CONDITIONS: string = `${AppConstants.API_ENDPOINT}TermsAndConditions/all`;
  
  public static SEND_MAIL_TO_IC: string = `${AppConstants.API_ENDPOINT}MyPolicy/SendMailOnCancelRenewAddRemoveFeaturePolicy`;

}
