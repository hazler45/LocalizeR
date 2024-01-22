// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './authSlice';
import serviceProviderReducer from './serviceProviderSlice'; // Import the new slice

const rootReducer = combineReducers({
  auth: authReducer,
  serviceProvider: serviceProviderReducer, // Include the new slice
  // other reducers...
});

export default rootReducer;
