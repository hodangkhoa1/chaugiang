export interface IFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerCareContent: string;
}

export interface ICertification {
  certificationID: string;
  certificationName: string;
  certificationImage: string;
}

export type ICreateCustomerCare = Omit<IFormValues, 'customerCareID'>;
