import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getServicesApi
} from '../utils/api';

export const fetchServices = createAsyncThunk(
  'services/fetchAll',
  getServicesApi
);