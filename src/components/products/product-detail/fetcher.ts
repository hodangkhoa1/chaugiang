import { get, post, ResponseWithPayload } from '@/fetcherAxios';
import {
  ICreateCustomerCare,
  IProduct,
  IProductDetail,
  ProductDetailDataBody,
} from './interface';
import { API_CUSTOMER_CARE, API_PRODUCT } from '@/fetcherAxios/endpoint';

export const createCustomerCare = (data: ICreateCustomerCare) => {
  return post<ICreateCustomerCare, ResponseWithPayload<ICreateCustomerCare>>({
    data,
  })(API_CUSTOMER_CARE.ADD_CUSTOMER_CARE);
};

export const getProductDetail = (id: string) => {
  return post<ProductDetailDataBody, ResponseWithPayload<IProductDetail>>({
    data: {
      id,
    },
  })(API_PRODUCT.GET_PRODUCT_BY_ID);
};

export const getListProduct = () => {
  return get<ResponseWithPayload<IProduct[]>>({})(API_PRODUCT.GET_ALL_PRODUCT);
};
