// serviceProviderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const serviceProviderSlice = createSlice({
  name: 'serviceProvider',
  initialState: {
    providers: [],
    // other fields...
  },
  reducers: {
    setServiceProviders: (state, action) => {
      state.providers = action.payload;
    },
    // other reducers...
  },
});

export const { setServiceProviders } = serviceProviderSlice.actions;

export default serviceProviderSlice.reducer;
