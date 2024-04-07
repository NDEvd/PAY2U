import {
  TServices,
  TSubscriptions,
  TTariffList,
  TPromocode
} from './types';

import {
  URL,
  testToken
} from '../utils/const';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getServicesApi = () =>
  fetch(`${URL}/services/ `, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: testToken,
    }
  })
  .then((res) => checkResponse<TServices[]>(res))
  .then((data) => {
    if (data) return data;
    return Promise.reject(data);
  });

export const getSubscriptionsApi = () =>
  fetch(`${URL}/my_subscriptions/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: testToken,
    }
  })
  .then((res) => checkResponse<TSubscriptions[]>(res))
  .then((data) => {
    if (data) return data;
    return Promise.reject(data);
  });

export const getTariffsByIdApi = (id: number | string) =>
  fetch(`${URL}/services/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: testToken,
    }
  })
  .then((res) => checkResponse<TTariffList[]>(res))
  .then((data) => {
    if (data) return data;
    return Promise.reject(data);
  });

  export const payAndGetPromocodeApi = (id: string) =>
  fetch(`${URL}/tariffs/${id}/subscribe/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: testToken,
    },
  })
    .then((res) => checkResponse<TPromocode>(res))
    .then((data) => {
      if (data) {
        return data;
      }
      return Promise.reject(data);
    });