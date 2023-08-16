import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, NameSpace } from '../const';
import { TOffer } from '../types/offer';
import { AxiosInstance } from 'axios';
import { TAuthData } from '../types/auth-data';
import { TUserData } from '../types/user-data';
import { dropToken, setToken } from '../services/token';
import { TOfferId } from '../types/offer-id';
import { TDetail } from '../types/details';
import { TComment } from '../types/review';
import { TReviewForm } from '../components/review-form/review-form';
import { TFavoriteData } from '../types/favorite-data';
import { TAppDispatch, TRootState } from '../types/state';

type TEextra = {
  dispatch: TAppDispatch;
  state: TRootState;
  extra: AxiosInstance;
};

const loadOffers = createAsyncThunk<TOffer[], undefined, TEextra>(
  `${NameSpace.Offers}/loadOffers`,
  async (_arg, { extra: fetchData }) => {
    const { data } = await fetchData.get<TOffer[]>(APIRoute.Offers);

    return data;
  }
);

const checkAuthStatus = createAsyncThunk<string, undefined, TEextra>(
  `${NameSpace.User}/checkAuthStatus`,
  async (_arg, { extra: fetchData }) => {
    const {
      data: { email },
    } = await fetchData.get<TUserData>(APIRoute.Login);

    return email;
  }
);

const login = createAsyncThunk<string, TAuthData, TEextra>(
  `${NameSpace.User}/login`,
  async ({ email, password }, { extra: fetchData }) => {
    const {
      data: { token, email: userEmail },
    } = await fetchData.post<TUserData>(APIRoute.Login, {
      email,
      password,
    });

    setToken(token);

    return userEmail;
  }
);

const logout = createAsyncThunk<void, undefined, TEextra>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: fetchData }) => {
    await fetchData.delete(APIRoute.Logout);

    dropToken();
  }
);

const submitComment = createAsyncThunk<TComment, TReviewForm, TEextra>(
  `${NameSpace.Comments}/submitComment`,
  async ({ rating, comment, offerId }, { extra: fetchData }) => {
    const { data } = await fetchData.post<TComment>(
      `${APIRoute.Comments}/${offerId}`,
      {
        rating,
        comment,
      }
    );

    return data;
  }
);

const loadDetails = createAsyncThunk<TDetail, TOfferId, TEextra>(
  `${NameSpace.Offer}/loadDetails`,
  async ({ offerId }, { extra: fetchData }) => {
    const { data } = await fetchData.get<TDetail>(
      `${APIRoute.Offers}/${offerId}`
    );

    return data;
  }
);

const loadComments = createAsyncThunk<TComment[], TOfferId, TEextra>(
  `${NameSpace.Comments}/loadComments`,
  async ({ offerId }, { extra: fetchData }) => {
    const { data } = await fetchData.get<TComment[]>(
      `${APIRoute.Comments}/${offerId}`
    );

    return data;
  }
);

const loadNearPlaces = createAsyncThunk<TOffer[], TOfferId, TEextra>(
  `${NameSpace.NearPlaces}/loadNearPlaces`,
  async ({ offerId }, { extra: fetchData }) => {
    const { data } = await fetchData.get<TOffer[]>(
      `${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`
    );

    return data;
  }
);

const loadFavorites = createAsyncThunk<TOffer[], undefined, TEextra>(
  `${NameSpace.Favorites}/loadFavorites`,
  async (_arg, { extra: fetchData }) => {
    const { data } = await fetchData.get<TOffer[]>(APIRoute.Favorite);

    return data;
  }
);

const setFavorite = createAsyncThunk<TOffer, TFavoriteData, TEextra>(
  `${NameSpace.Favorites}/setFavorite`,
  async ({ favoriteId, status }, { extra: fetchData }) => {
    const { data } = await fetchData.post<TOffer>(
      `${APIRoute.Favorite}/${favoriteId}/${status}`
    );

    return data;
  }
);

export {
  loadOffers,
  checkAuthStatus,
  login,
  logout,
  loadDetails,
  loadComments,
  loadNearPlaces,
  submitComment,
  loadFavorites,
  setFavorite,
};
