import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { SLICE_NAMES } from './storeConstants';

export const store = configureStore({
  reducer: {
    [SLICE_NAMES.USER]: userSlice,
  },
});
