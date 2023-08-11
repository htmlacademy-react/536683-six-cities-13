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
  fetchFavorites,
  fetchNearPlaces,
  fetchOffers,
  requireAuth,
  setError,
  setUserEmail,
  updateFavorites,
} from './actions';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { dropToken, setToken } from '../services/token';
import { store } from '.';
import { TOfferId } from '../types/offer-id';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TReviewForm } from '../components/review-form/review-form';
import { TFavoriteData } from '../types/favorite-data';

type TAsyncThunk = {
  dispatch: TAppDispatch;
  state: TRootState;
  extra: AxiosInstance;
};

const clearError = createAsyncThunk('app/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, ERROR_TIMEOUT);
});

const loadOffers = createAsyncThunk<void, undefined, TAsyncThunk>(
  'data/loadOffers',
  async (_arg, { dispatch, extra: fetchData }) => {
    try {
      dispatch(changeLoadingStatus(LoadingStatus.Loading));
      const { data } = await fetchData.get<TOffer[]>(APIRoute.Offers);

      dispatch(changeLoadingStatus(LoadingStatus.Success));
      dispatch(fetchOffers(data));
    } catch (error) {
      dispatch(changeLoadingStatus(LoadingStatus.Idle));
    }
  }
);

const checkAuthStatus = createAsyncThunk<void, undefined, TAsyncThunk>(
  'user/checkAuthStatus',
  async (_arg, { dispatch, extra: fetchData }) => {
    try {
      const {
        data: { email },
      } = await fetchData.get<TUserData>(APIRoute.Login);

      dispatch(requireAuth(AuthStatus.Auth));
      dispatch(setUserEmail(email));
    } catch {
      dispatch(requireAuth(AuthStatus.NoAuth));
    }
  }
);

const loadDetails = createAsyncThunk<void, TOfferId, TAsyncThunk>(
  'data/loadDetails',
  ({ offerId }, { dispatch, extra: fetchData }) => {
    dispatch(changeLoadingStatus(LoadingStatus.Loading));
    Promise.all([
      fetchData.get<TDetail>(`${APIRoute.Offers}/${offerId}`),
      fetchData.get<TOffer[]>(
        `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`
      ),
      fetchData.get<TComment[]>(`${APIRoute.Comments}/${offerId}`),
    ])
      .then(([{ data: details }, { data: nearPlaces }, { data: comments }]) => {
        dispatch(changeLoadingStatus(LoadingStatus.Success));
        dispatch(fetchDetails(details));
        dispatch(fetchComments(comments));
        dispatch(fetchNearPlaces(nearPlaces));
      })
      .catch(() => {
        dispatch(changeLoadingStatus(LoadingStatus.Idle));
      });
  }
);

const updateDetails = createAsyncThunk<void, TOfferId, TAsyncThunk>(
  'data/loadDetails',
  async ({ offerId }, { dispatch, extra: fetchData }) => {
    const { data } = await fetchData.get<TDetail>(
      `${APIRoute.Offers}/${offerId}`
    );

    dispatch(fetchDetails(data));
  }
);

const loadFavorites = createAsyncThunk<void, undefined, TAsyncThunk>(
  'data/loadFavorites',
  async (_arg, { dispatch, extra: fetchData }) => {
    dispatch(changeLoadingStatus(LoadingStatus.Loading));
    const { data } = await fetchData.get<TOffer[]>(APIRoute.Favorite);
    dispatch(changeLoadingStatus(LoadingStatus.Success));
    dispatch(fetchFavorites(data));
  }
);

const setFavorite = createAsyncThunk<void, TFavoriteData, TAsyncThunk>(
  'data/setFavorite',
  async ({ favoriteId, status }, { dispatch, extra: fetchData }) => {
    const { data } = await fetchData.post<TOffer>(
      `${APIRoute.Favorite}/${favoriteId}/${status}`
    );

    dispatch(updateFavorites(data));
  }
);

const login = createAsyncThunk<void, TAuthData, TAsyncThunk>(
  'user/login',
  async ({ email, password }, { dispatch, extra: fetchData }) => {
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
  }
);

const logout = createAsyncThunk<void, undefined, TAsyncThunk>(
  'user/login',
  async (_arg, { dispatch, extra: fetchData }) => {
    try {
      await fetchData.delete(APIRoute.Logout);

      dropToken();
      dispatch(requireAuth(AuthStatus.NoAuth));
    } catch (error) {
      dispatch(requireAuth(AuthStatus.Unknown));
    }
  }
);

const submitComment = createAsyncThunk<void, TReviewForm, TAsyncThunk>(
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
  loadFavorites,
  setFavorite,
  updateDetails,
};
