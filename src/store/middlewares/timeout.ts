import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { reducer } from '../reducer';

type Reducer = ReturnType<typeof reducer>;
export type TTimerAction = { delay: number };

const timeout: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<TTimerAction>) => {
    if (!action.payload || !action.payload.delay) {
      return next(action);
    }

    const timerId = setTimeout(() => next(action), action.payload.delay);

    return () => clearTimeout(timerId);
  };

export { timeout };
