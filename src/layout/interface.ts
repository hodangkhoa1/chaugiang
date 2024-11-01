export interface ITypeProduct {
  typeProductID: string;
  typeProductName: string;
  listProduct: IProductWithType[];
}

export interface IProductWithType {
  productID: string;
  productName: string;
}
