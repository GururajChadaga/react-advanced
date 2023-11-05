import { configureStore } from '@reduxjs/toolkit';
import { SLICE_NAMES } from './storeConstatns';
import cartSliceReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    [SLICE_NAMES.CART]: cartSliceReducer,
  },
});
