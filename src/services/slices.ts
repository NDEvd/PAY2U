import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit"
import { fetchServices } from './actions';
import { TServices, TSubscriptions, TTariff } from '../utils/types';

interface ServicesState {
  services: TServices[];
  subscriptions: TSubscriptions[];
  tariffs: TTariff[];
  error?: string | undefined;
};

const initialState: ServicesState = {
  services: [],
  subscriptions: [],
  tariffs: [],
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
    setTariffs: (state, action: PayloadAction<TTariff[]>) => {
      state.tariffs = action.payload;
    },
  },
  selectors: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.error = '';
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services = action.payload.data;
      });
  }
});

export default servicesSlice.reducer;
export const { setServices, setSubscriptions, setTariffs } = servicesSlice.actions;