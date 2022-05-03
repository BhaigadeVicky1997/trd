import { IStatus } from './IStatus';

export interface VehicleData {
  vehicleId: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleNumber: string;
  sequenceNumber: string;
  vehiclePurposeId: number;
  averageDailyMileage: string;
  parkingGarage: boolean;
  estimateValue: string;
  isSelected: boolean;
  drivers: DriverDetails;
  vehicleViolation: [VehicleViolation];
  customer: CustomerData;
  status?: string;
  policyType?: string;
  expiryDate?: string;
}

export interface CustomerData {
  nationalId: number;
}

export interface DriverDetails {
  driverId: string;
  driverName: string;
  dateOfBirth: Date;
  educationId: number;
  medicalIssueId: number;
  isMailDriver: boolean;
}

export interface VehicleViolation {
  id: string;
  vehicleId: string;
  violationDate: Date;
  violationTypeId: number;
}
export interface IVehicles {
  vehicleData: VehicleData;
}
export interface IVehicleResponse extends IStatus {
  data: [IVehicles];
}
