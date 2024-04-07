import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getServicesApi,
  getSubscriptionsApi,
  getTariffsByIdApi,
  payAndGetPromocodeApi,
} from '../utils/api';

export const fetchServices = createAsyncThunk(
  'services/fetchAll',
  getServicesApi
);

export const fetchSubscriptions = createAsyncThunk(
  'services/fetchSubscriptions',
  getSubscriptionsApi
);

export const fetchTariffList = createAsyncThunk(
  'services/fetchTariffList',
  getTariffsByIdApi
);

export const fetchPayAndGetPromocode = createAsyncThunk(
  'services/fetchPromo',
  payAndGetPromocodeApi
);



