import { TServices, TSubscriptions, TTariff } from './types';

const URL = 'https://dfter123.pythonanywhere.com';
const testToken = '7261af576d09e525ec8be9a67bd31b99f214b4ea';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

  type TServerResponse<T> = {
    success: boolean;
  } & T;

  type TServicesResponse = TServerResponse<{
    data: TServices[];
  }>;

  // export const getOrdersApi = () =>
  // fetchWithRefresh<TFeedsResponse>(`${URL}/orders`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8',
  //     authorization: getCookie('accessToken')
  //   } as HeadersInit
  // }).then((data) => {
  //   if (data?.success) return data.orders;
  //   return Promise.reject(data);
  // });

  export const getServicesApi = () =>
    fetch(`${URL}/api/v1/services/ `, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Token: testToken,
      }
    })
    .then((res) => checkResponse<TServicesResponse>(res))
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });

    type TSubscriptionsResponse = TServerResponse<{
      data: TSubscriptions[];
    }>;

    export const getSubscriptionssApi = () =>
    fetch(`${URL}api/v1/my_subscriptions/`)
      .then((res) => checkResponse<TSubscriptionsResponse>(res))
      .then((data) => {
        if (data?.success) return data;
        return Promise.reject(data);
      });

      type TTariffsResponse = TServerResponse<{
        tariffss: TTariff[];
      }>;

      export const getTariffsByIdApi = (id: number | string) =>
        fetch(`${URL}/api/v1/services/1//${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => checkResponse<TTariffsResponse>(res));

  //     export const getOrderByNumberApi = (number: number) =>
  //      fetch(`${URL}/orders/${number}`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
  // }).then((res) => checkResponse<TOrderResponse>(res));