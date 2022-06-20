import { IVehicle } from "./IVehicle";

export interface IPaymentAmt{
  amount: number,
  language: string,
  ICID:string;
  vehicleList:IVehicle[],
}






