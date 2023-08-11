export interface ProductData {
  id: number;
  title: string;
  subTitle: string;
  image: string;
}

export interface ProductsData {
  coconutWater: ProductData[];
  milk: ProductData[];
  juice: ProductData[];
  aloeVera: ProductData[];
  coffee: ProductData[];
  energyDrink: ProductData[];
}
