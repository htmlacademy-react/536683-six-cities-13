import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthStatus, ERROR_TIMEOUT, RequestStatus } from '../const';
import { TOffer } from '../types/offer';
import { TAppDispatch, TRootState } from '../types/state';
import { AxiosInstance } from 'axios';
import {
  changeRequestStatus,
  fetchOffers,
  requireAuth,
  setError,
  setUserEmail,
} from './actions';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { dropToken, setToken } from '../services/token';
import { store } from '.';

const clearError = createAsyncThunk('app/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, ERROR_TIMEOUT);
});

const loadOffers = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>('data/loadOffers', async (_arg, { dispatch, extra: fetchData }) => {
  try {
    dispatch(changeRequestStatus(RequestStatus.Loading));
    const { data } = await fetchData.get<TOffer[]>(APIRoute.Offers);

    dispatch(changeRequestStatus(RequestStatus.Success));
    dispatch(fetchOffers(data));
  } catch (error) {
    dispatch(changeRequestStatus(RequestStatus.Error));
  }
});

const checkAuthStatus = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>('user/checkAuthStatus', async (_arg, { dispatch, extra: fetchData }) => {
  try {
    const {
      data: { email },
    } = await fetchData.get<TUserData>(APIRoute.Login);

    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(setUserEmail(email));
  } catch {
    dispatch(requireAuth(AuthStatus.NoAuth));
  }
});

const login = createAsyncThunk<
  void,
  TAuthData,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>('user/login', async ({ email, password }, { dispatch, extra: fetchData }) => {
  try {
    const {
      data: { token, email: userEmail },
    } = await fetchData.post<TUserData>(APIRoute.Login, {
      email,
      password,
    });

    setToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(setUserEmail(userEmail));
  } catch (error) {
    dispatch(requireAuth(AuthStatus.NoAuth));
  }
});

const logout = createAsyncThunk<
  void,
  undefined,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>('user/login', async (_arg, { dispatch, extra: fetchData }) => {
  try {
    await fetchData.delete(APIRoute.Logout);

    dropToken();
    dispatch(requireAuth(AuthStatus.NoAuth));
  } catch (error) {
    dispatch(requireAuth(AuthStatus.Unknown));
  }
});

export { loadOffers, checkAuthStatus, login, logout, clearError };
