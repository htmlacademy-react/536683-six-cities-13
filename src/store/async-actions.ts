import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthStatus, ERROR_TIMEOUT, LoadingStatus } from '../const';
import { TOffer } from '../types/offer';
import { TAppDispatch, TRootState } from '../types/state';
import { AxiosInstance } from 'axios';
import {
  addComment,
  changeLoadingStatus,
  fetchComments,
  fetchDetails,
  fetchNearPlaces,
  fetchOffers,
  requireAuth,
  setError,
  setUserEmail,
} from './actions';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { dropToken, setToken } from '../services/token';
import { store } from '.';
import { TOfferId } from '../types/offer-id';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TReviewForm } from '../components/review-form/review-form';

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
    dispatch(changeLoadingStatus(LoadingStatus.Loading));
    const { data } = await fetchData.get<TOffer[]>(APIRoute.Offers);

    dispatch(changeLoadingStatus(LoadingStatus.Success));
    dispatch(fetchOffers(data));
  } catch (error) {
    dispatch(changeLoadingStatus(LoadingStatus.Idle));
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

const loadDetails = createAsyncThunk<
  void,
  TOfferId,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>('data/loadDetails', ({ offerId }, { dispatch, extra: fetchData }) => {
  dispatch(changeLoadingStatus(LoadingStatus.Loading));

  Promise.all([
    fetchData.get<TDetail>(`${APIRoute.Offers}/${offerId}`),
    fetchData.get<TOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`),
    fetchData.get<TComment[]>(`${APIRoute.Comments}/${offerId}`),
  ])
    .then(([{ data: details }, { data: nearPlaces }, { data: comments }]) => {
      dispatch(fetchDetails(details));
      dispatch(fetchComments(comments));
      dispatch(fetchNearPlaces(nearPlaces));
      dispatch(changeLoadingStatus(LoadingStatus.Success));
    })
    .catch(() => {
      dispatch(changeLoadingStatus(LoadingStatus.Idle));
    });
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

const submitComment = createAsyncThunk<
  void,
  TReviewForm,
  { dispatch: TAppDispatch; state: TRootState; extra: AxiosInstance }
>(
  'user/login',
  async ({ rating, comment, offerId }, { dispatch, extra: fetchData }) => {
    const { data } = await fetchData.post<TComment>(
      `${APIRoute.Comments}/${offerId}`,
      {
        rating,
        comment,
      }
    );

    dispatch(addComment(data));
  }
);

export {
  loadOffers,
  checkAuthStatus,
  login,
  logout,
  clearError,
  loadDetails,
  submitComment,
};
