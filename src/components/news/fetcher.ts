import { get, post, ResponseWithPayload } from '@/fetcherAxios';
import { ICreateCustomerCare, INews, IProduct } from './interface';
import {
  API_CUSTOMER_CARE,
  API_NEWS,
  API_PRODUCT,
} from '@/fetcherAxios/endpoint';

export const createCustomerCare = (data: ICreateCustomerCare) => {
  return post<ICreateCustomerCare, ResponseWithPayload<ICreateCustomerCare>>({
    data,
  })(API_CUSTOMER_CARE.ADD_CUSTOMER_CARE);
};

export const getListProduct = () => {
  return get<ResponseWithPayload<IProduct[]>>({})(API_PRODUCT.GET_ALL_PRODUCT);
};

export const getListNews = () => {
  return get<ResponseWithPayload<INews[]>>({})(API_NEWS.GET_ALL_NEWS);
};
