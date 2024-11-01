import { ResponseWithPayload, get, post } from '@/fetcherAxios';
import {
  IBanner,
  ICreateCustomerCare,
  ICertification,
  IProduct,
  ITypeProduct,
  INews,
} from './interface';
import {
  API_BANNER,
  API_CUSTOMER_CARE,
  API_CERTIFICATION,
  API_PRODUCT,
  API_TYPE_PRODUCT,
  API_NEWS,
} from '@/fetcherAxios/endpoint';

export const createCustomerCare = (data: ICreateCustomerCare) => {
  return post<ICreateCustomerCare, ResponseWithPayload<ICreateCustomerCare>>({
    data,
  })(API_CUSTOMER_CARE.ADD_CUSTOMER_CARE);
};

export const getListBanner = () => {
  return get<ResponseWithPayload<IBanner[]>>({})(API_BANNER.GET_ALL_BANNER);
};

export const getListCertification = () => {
  return get<ResponseWithPayload<ICertification[]>>({})(
    API_CERTIFICATION.GET_ALL_CERTIFICATION
  );
};

export const getListProduct = () => {
  return get<ResponseWithPayload<IProduct[]>>({})(API_PRODUCT.GET_ALL_PRODUCT);
};

export const getListProductWithType = () => {
  return get<ResponseWithPayload<ITypeProduct[]>>({})(
    API_TYPE_PRODUCT.GET_ALL_TYPE_PRODUCT_WITH_NO_AUTHEN
  );
};

export const getListNews = () => {
  return get<ResponseWithPayload<INews[]>>({})(API_NEWS.GET_ALL_NEWS);
};
