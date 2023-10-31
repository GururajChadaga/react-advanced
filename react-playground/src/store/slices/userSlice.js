import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAMES } from '../storeConstants';

const userSlice = createSlice({
  name: SLICE_NAMES.USER,
  initialState: { userName: 'DefaultUser' },
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    loginUser: () => {},
    logoutUser: () => {},
  },
});

export default userSlice.reducer;
export const { updateUserName, loginUser, logoutUser } = userSlice.actions;
