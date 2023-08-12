import { createAction } from '@reduxjs/toolkit';
import { TError } from '../types/error';

const changeLocation = createAction<string>('nav/changeLocation');
const setError = createAction<TError | null>('app/setError');

export { changeLocation, setError };
