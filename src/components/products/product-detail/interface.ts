export interface IProductDetail {
  productID: string;
  productName: string;
  imageProduct: string;
  weightProduct: number;
  starRateProduct: string;
  manufacturedBy: string;
  packingSpecification: string;
  certificateProduct: string;
  moq: string;
  shelflife: string;
  volume: string;
  payment: string;
  sellingPoints: string;
  placeOfOrigin: string;
  note1: string;
  note2: string;
  note3: string;
  bottomContent1: string;
  bottomContent2: string;
  bottomContent3: string;
  bottomContent4: string;
  bottomContent5: string;
}

export interface IProduct {
  productID: string;
  typeProductID: string;
  productName: string;
  imageProduct: string;
  weightProduct: string;
}

export interface ProductDetailDataBody {
  id: string;
}

export interface IFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerCareContent: string;
}

export type ICreateCustomerCare = Omit<IFormValues, 'customerCareID'>;
