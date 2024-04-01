import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit"
import { fetchServices } from './actions';
import { TServices } from '../utils/types';

interface ServicesState {
  services: TServices[];
  error?: string | undefined;
}

const initialState: ServicesState = {
  services: [],
  error: ''
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<TServices[]>) => {
      state.services = action.payload;
    }
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
export const { setServices } = servicesSlice.actions;