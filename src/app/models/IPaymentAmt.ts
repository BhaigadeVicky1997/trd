import { IVehicle } from "./IVehicle";

export interface IPaymentAmt{
  totalAmount: number,
  language?: string,
  icid:string;
  vehicleList:IVehicle[],
  customerId:any
}






