import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { timeout } from './middlewares/timeout';
import { rootReducer } from './root-reducer';

export const fetchData = createApi?.();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchData,
      },
    }).concat(timeout),
});

export { store };
