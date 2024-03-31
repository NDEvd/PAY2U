import { TServices, TSubscriptions, TTariff } from './types';

const URL = 'https:___________';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

  type TServerResponse<T> = {
    success: boolean;
  } & T;

  type TServicesResponse = TServerResponse<{
    data: TServices[];
  }>;

  export const getServicesApi = () =>
  fetch(`${URL}/api/v1/services/ `)
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