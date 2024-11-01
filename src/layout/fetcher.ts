import { ResponseWithPayload, get } from '@/fetcherAxios';
import { API_TYPE_PRODUCT } from '@/fetcherAxios/endpoint';
import { ITypeProduct } from './interface';

export const getListTypeProduct = () => {
  return get<ResponseWithPayload<ITypeProduct[]>>({})(
    API_TYPE_PRODUCT.GET_ALL_TYPE_PRODUCT_WITH_NO_AUTHEN
  );
};
