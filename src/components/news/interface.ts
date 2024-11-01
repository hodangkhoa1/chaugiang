export interface NewsData {
  id: string;
  title: string;
  dateCreate: string;
  image1: string;
  title2: string;
  title2_content1: string;
  title2_content2: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

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
