import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;
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
