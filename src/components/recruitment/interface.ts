export interface IProduct {
  productID: string;
  typeProductID: string;
  productName: string;
  imageProduct: string;
  weightProduct: string;
}

export interface INews {
  newsID: string;
  newsTitle: string;
  newsImage: string;
}

export interface IFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerCareContent: string;
}

export type ICreateCustomerCare = Omit<IFormValues, 'customerCareID'>;
