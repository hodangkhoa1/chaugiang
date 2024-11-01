import { post, ResponseWithPayload } from '@/fetcherAxios';
import { ICreateCustomerCare } from './interface';
import { API_CUSTOMER_CARE } from '@/fetcherAxios/endpoint';

export const createCustomerCare = (data: ICreateCustomerCare) => {
  return post<ICreateCustomerCare, ResponseWithPayload<ICreateCustomerCare>>({
    data,
  })(API_CUSTOMER_CARE.ADD_CUSTOMER_CARE);
};
