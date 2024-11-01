export interface IFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerCareContent: string;
}

export type ICreateCustomerCare = Omit<IFormValues, 'customerCareID'>;
