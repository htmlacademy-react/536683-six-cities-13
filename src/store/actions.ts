import { createAction } from '@reduxjs/toolkit';
import { TError } from '../types/error';
import { NameSpace } from '../const';

const changeLocation = createAction<string>(`${NameSpace.App}/changeLocation`);
const clearError = createAction<{ errorInfo: TError | null; delay: number }>(
  `${NameSpace.App}/clearError`
);

const setError = createAction<TError | null>(`${NameSpace.App}/setError`);

export { changeLocation, setError, clearError };
