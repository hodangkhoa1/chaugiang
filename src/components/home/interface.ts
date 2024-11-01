export interface IProduct {
  productID: string;
  typeProductID: string;
  productName: string;
  imageProduct: string;
  weightProduct: string;
}

export interface ITypeWithProduct {
  productID: string;
  productName: string;
  imageProduct: string;
  weightProduct: string;
}

export interface ITypeProduct {
  typeProductID: string;
  typeProductName: string;
  imageProduct: string;
  listProduct: ITypeWithProduct[];
}

export interface HomeProductData {
  id: string;
  name: string;
  image: string;
  volume: string;
  productDetail: string;
}

export interface IBanner {
  bannerID: string;
  bannerImage: string;
}

export interface ICertification {
  certificationID: string;
  certificationName: string;
  certificationImage: string;
}

export interface IFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerCareContent: string;
}

export type ICreateCustomerCare = Omit<IFormValues, 'customerCareID'>;

export interface INews {
  newsID: string;
  newsTitle: string;
  newsImage: string;
}
