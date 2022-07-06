import { IStatus } from './IStatus';

export interface IVehicleImage {
  id: string;
  vehicleId: string;
  vehicleImages: string;
}

export interface IVehicleImageResponse extends IStatus {
  data: any;
}
