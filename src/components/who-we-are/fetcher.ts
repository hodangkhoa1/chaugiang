import { get, post, ResponseWithPayload } from '@/fetcherAxios';
import { ICertification, ICreateCustomerCare } from './interface';
import { API_CERTIFICATION, API_CUSTOMER_CARE } from '@/fetcherAxios/endpoint';

export const createCustomerCare = (data: ICreateCustomerCare) => {
  return post<ICreateCustomerCare, ResponseWithPayload<ICreateCustomerCare>>({
    data,
  })(API_CUSTOMER_CARE.ADD_CUSTOMER_CARE);
};

export const getListCertification = () => {
  return get<ResponseWithPayload<ICertification[]>>({})(
    API_CERTIFICATION.GET_ALL_CERTIFICATION
  );
};
