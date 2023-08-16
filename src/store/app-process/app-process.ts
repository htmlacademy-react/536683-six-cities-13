import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_LOCATION, NameSpace } from '../../const';
import { TError } from '../../types/error';
import { TState } from '../../types/state';

type TAppProcessState = Pick<TState, 'location' | 'error'>;

const initialState: TAppProcessState = {
  location: DEFAULT_LOCATION,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setError: (state, action: PayloadAction<TError | null>) => {
      state.error = action.payload;
    },
    clearError: (
      state,
      action: PayloadAction<{ errorInfo: TError | null; delay: number }>
    ) => {
      state.error = action.payload.errorInfo;
    },
  },
});

export const { changeLocation, setError, clearError } = appProcess.actions;
