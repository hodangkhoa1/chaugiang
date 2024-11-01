import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
  AxiosHeaderValue,
} from 'axios';
import { STATUS_CODE } from '@/constant/error-code';

type RawAxiosHeaders = Record<string, AxiosHeaderValue | AxiosHeaders>;
export interface ResponseWithPayload<R> {
  status: STATUS_CODE;
  message: string;
  data: R;
}

export interface ResponseWithoutPayload {
  error_code: STATUS_CODE;
  message: string;
}

interface CRUDProps<T> {
  data?: T;
  options?: AxiosRequestConfig;
  headers?: RawAxiosHeaders;
  gw?: string;
  timeout?: number;
}

const MS_TIMEOUT = 10000;
const API_MAIN_GW = process.env.API_MAIN_GW;

export const GATEWAY = {
  API_MAIN_GW: 'API_MAIN_GW',
};

const getGateway = (gw?: string) => {
  switch (gw) {
    case GATEWAY.API_MAIN_GW: {
      return API_MAIN_GW;
    }
    default: {
      return API_MAIN_GW;
    }
  }
};

const requestWithTimeout = (
  promise: Promise<AxiosResponse>,
  ms = MS_TIMEOUT
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request timeout'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
};

const axiosResolver = async (promise: Promise<AxiosResponse>) => {
  return await promise
    .then((res) => {
      if (res.status === 200) return res.data;
      throw new Error(JSON.stringify(res.data) || 'Request failed');
    })
    .catch((err) => {
      throw new Error(err.message);
    });
};

export const apiClient = axios.create({
  headers: {
    Accept: 'application/json;odata.metadata=minimal;odata.streaming=true',
    'Content-Type':
      'application/json;odata.metadata=minimal;odata.streaming=true',
  },
});

export const get =
  <R>({ options, headers, gw, timeout }: CRUDProps<undefined>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.get(`${getGateway(gw)}${url}`, {
        headers,
        ...options,
      }),
      timeout
    );

    return axiosResolver(axiosPromise);
  };

export const post =
  <T, R>({ data, options, headers, gw, timeout }: CRUDProps<T>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.post(`${getGateway(gw)}${url}`, data, {
        headers,
        ...options,
      }),
      timeout
    );

    return axiosResolver(axiosPromise);
  };

export const put =
  <T, R>({ data, options, headers, gw, timeout }: CRUDProps<T>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.put(`${getGateway(gw)}${url}`, data, {
        headers,
        ...options,
      }),
      timeout
    );

    return axiosResolver(axiosPromise);
  };

export const deleteGW =
  <R>({ options, headers, gw, timeout }: CRUDProps<undefined>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.delete(`${getGateway(gw)}${url}`, {
        headers,
        ...options,
      }),
      timeout
    );

    return axiosResolver(axiosPromise);
  };

export const uploadFile =
  <R>({ data, headers, gw, timeout }: CRUDProps<FormData>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.post(`${getGateway(gw)}${url}`, data, {
        headers: {
          ...headers,
          'Content-Type':
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
        responseType: 'blob',
      }),
      timeout
    );
    return axiosResolver(axiosPromise);
  };

export const downloadFile =
  <R>({ options, headers, gw, timeout }: CRUDProps<undefined>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.get(`${getGateway(gw)}${url}`, {
        headers,
        ...options,
        responseType: 'blob',
      }),
      timeout
    );

    return axiosResolver(axiosPromise);
  };

export const exportFile =
  <T, R>({ data, options, headers, gw, timeout }: CRUDProps<T>) =>
  (url: string): Promise<R> => {
    const axiosPromise = requestWithTimeout(
      apiClient.post(`${getGateway(gw)}${url}`, data, {
        headers,
        ...options,
        responseType: 'blob',
      }),
      timeout
    );

    return axiosResolver(axiosPromise);
  };
