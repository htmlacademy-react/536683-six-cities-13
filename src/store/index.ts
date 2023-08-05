import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import axios from '../services/api';

export const fetchData = axios;

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchData,
      },
    }),
});

export { store };
