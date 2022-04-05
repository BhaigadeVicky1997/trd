import { IStatus } from "./IStatus";

export interface IFaq {
  // id: string;
  // question : string;
  // answer: string;
  module: string;
  faqs: IFaqList[];
  // displayOnHome: boolean;
  // status : boolean;
}

export interface IFaqList {
  question: string;
  answer: string;
}

export interface IFaqsResponse extends IStatus {
  data: any;
}
