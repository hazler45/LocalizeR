// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './path/to/rootReducer'; // Import the rootReducer

const store = configureStore({
  reducer: rootReducer, // Use the rootReducer
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
