// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    expirationTime: null,
    id: null
  },
  reducers: {
    setAuthData: (state, action) => {
      const { userName, email, token, id, expirationTime } = action.payload;
      state.user = { userName, email, id };
      state.token = token;
      state.expirationTime = expirationTime;
    },
    // other reducers...
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
