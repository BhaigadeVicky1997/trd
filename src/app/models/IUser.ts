import { IStatus } from "./IStatus";

export interface IUser {
  id: string;
  name: string;
  username: string;
  password: string;
  ContactNo: string;
  Designation: string;
  Password: string;
  isActive: boolean;
  ModifiedBy: boolean;
  ModifiedOn: string;
  CreatedBy: string;
  CreatedOn: boolean;
  Date: string;
  RoleType: string;
}

export interface IRoleResponse extends IStatus {
  data: any;
}


export interface IUsersResponse extends IStatus {
  data: any;
}

