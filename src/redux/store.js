import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import baseApiSlice from './apis/baseApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
  },
});
