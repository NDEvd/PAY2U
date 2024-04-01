import { combineReducers, configureStore } from '@reduxjs/toolkit';
import servicesSlice from './slices';

import {
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from "react-redux";

import type {TypedUseSelectorHook} from "react-redux";

const rootReducer = combineReducers({
  services: servicesSlice,
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;