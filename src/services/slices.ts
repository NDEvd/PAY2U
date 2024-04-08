import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit"
import {
  fetchServices,
  fetchSubscriptions,
  fetchTariffList,
  fetchPayAndGetPromocode,
} from './actions';
import { TServices, TSubscriptions, TTariffList } from '../utils/types';

interface ServicesState {
  services: TServices[];
  subscriptions: TSubscriptions[];
  tariffList: TTariffList[];
  promocode: {
    code: string;
    date: string;
  }
  promocodeRequest: boolean;
  error?: string | undefined;
};

const initialState: ServicesState = {
  services: [],
  subscriptions: [],
  tariffList: [],
  promocode: {
    code: '',
    date: '',
  },
  promocodeRequest: false,
  error: ''
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<TServices[]>) => {
      state.services = action.payload;
    },
    setSubscriptions: (state, action: PayloadAction<TSubscriptions[]>) => {
      state.subscriptions = action.payload;
    },
    resetPromocode: (state) => {
      state.promocode = {
        code: '',
        date: '',
      };
    },
  },
  selectors: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        state.subscriptions = action.payload;
      })
      .addCase(fetchTariffList.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchTariffList.fulfilled, (state, action) => {
        state.tariffList = action.payload;
      })
      .addCase(fetchPayAndGetPromocode.rejected, (state, action) => {
        state.promocodeRequest = false;
        state.error = action.error.message;
      })
      .addCase(fetchPayAndGetPromocode.fulfilled, (state, action) => {
        state.promocodeRequest = true;
        state.promocode.code = action.payload.promo_code;
        state.promocode.date = action.payload.promo_code_period;
      });
  },
});

export default servicesSlice.reducer;
export const { setServices, setSubscriptions, resetPromocode } = servicesSlice.actions;