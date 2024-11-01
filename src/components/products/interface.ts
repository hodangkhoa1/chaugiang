export interface ProductData {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  hover: string;
}

export interface ProductsData {
  coconutWater: ProductData[];
  milk: ProductData[];
  juice: ProductData[];
  aloeVera: ProductData[];
  coffee: ProductData[];
  energyDrink: ProductData[];
}

export interface IFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  customerCareContent: string;
}

export type ICreateCustomerCare = Omit<IFormValues, 'customerCareID'>;
