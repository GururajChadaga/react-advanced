import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAMES } from '../storeConstatns';

const cartSlice = createSlice({
  name: SLICE_NAMES.CART,
  initialState: { items: {} },
  reducers: {
    addToCart: (state, action) => {
      const dishId = action.payload.id;
      if (dishId in state.items) {
        state.items[dishId].count++;
      } else {
        state.items[dishId] = {
          count: 1,
          dish: action.payload,
        };
      }
    },
    removeFromCart: (state, action) => {
      const dishId = action.payload.id;
      if (dishId in state.items) {
        if (state.items[dishId].count > 1) state.items[dishId].count--;
        else if (state.items[dishId].count === 1) delete state.items[dishId];
      }
    },
    clearCart: () => {
      return { items: {} };
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
