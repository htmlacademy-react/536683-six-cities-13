import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthStatus, RequestStatus } from '../const';
import { TOffer } from '../types/offer';
import { TAppDispatch, TRootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { changeRequestStatus, fetchOffers, requireAuth } from './actions';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { setToken } from '../services/token';

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
    await fetchData.get(APIRoute.Login);
    dispatch(requireAuth(AuthStatus.Auth));
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
      data: { token },
    } = await fetchData.post<TUserData>(APIRoute.Login, {
      email,
      password,
    });

    setToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
  } catch (error) {
    dispatch(requireAuth(AuthStatus.NoAuth));
  }
});

export { loadOffers, checkAuthStatus, login };
