import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {
  checkAuthStatus,
  loadDetails,
  loadFavorites,
  loadNearPlaces,
  loadOffers,
  login,
  logout,
  setFavorite,
} from './async-actions';
import { TRootState } from '../types/state';
import { APIRoute, NameSpace } from '../const';
import {
  TAppThunkDispatch,
  extractActionTypes,
  makeFakeOfferDetails,
  makeFakeOffers,
} from '../utils/mocks';
import { Action } from '@reduxjs/toolkit';
import * as tokenStore from '../services/token';
import axios from 'axios';
import { TDetail } from '../types/details';

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn(),
}));

vi.mock('./root-reducer', () => ({ rootReducer: vi.fn() }));

vi.mock('axios', async (importActual) => {
  const actual = await importActual<typeof import('axios')>();

  const mockAxios = {
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
        post: mocks.post,
      })),
    },
  };

  return mockAxios;
});

describe('Async actions', () => {
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    TRootState,
    Action<string>,
    TAppThunkDispatch
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [NameSpace.Offers]: { offers: [] },
    });
  });

  describe('Action: "checkAuthStatus"', () => {
    it('should dispatch "checkAuthStatus.pending", "checkAuthStatus.fulfilled" with thunk "checkAuthStatus"', async () => {
      const fakeResponse = { email: 'check@gmail.ru' };
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200, fakeResponse);

      await store.dispatch(checkAuthStatus());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthStatus.pending", "checkAuthStatus.rejected" with thunk "checkAuthStatus"', async () => {
      const fakeResponse = { email: 'check@gmail.ru' };
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400, fakeResponse);

      await store.dispatch(checkAuthStatus());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.rejected.type,
      ]);
    });
  });

  describe('Action: "login"', () => {
    it('should dispatch "login.pending", "login.fulfilled" with thunk "login"', async () => {
      const fakeRequest = { email: 'fake@gmail.ru', password: '100500' };
      const fakeResponse = { token: 'fake', email: 'check@gmail.ru' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeResponse);

      await store.dispatch(login(fakeRequest));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([login.pending.type, login.fulfilled.type]);
    });

    it('should call "setToken" once with recieved token', async () => {
      const fakeRequest = { email: 'fake@gmail.ru', password: '100500' };
      const fakeResponse = { token: 'fake', email: 'check@gmail.ru' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeResponse);
      const fakeSavedToken = vi.spyOn(tokenStore, 'setToken');

      await store.dispatch(login(fakeRequest));

      expect(fakeSavedToken).toBeCalledTimes(1);
      expect(fakeSavedToken).toBeCalledWith(fakeResponse.token);
    });

    it('should dispatch "login.pending", "login.rejected" with thunk "login"', async () => {
      const fakeRequest = { email: 'fake@gmail.ru', password: '100500' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(400);

      await store.dispatch(login(fakeRequest));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([login.pending.type, login.rejected.type]);
    });
  });

  describe('Action: "logout"', () => {
    it('should dispatch "logout.pending", "logout.fulfilled" with thunk "logout"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(200);

      await store.dispatch(logout());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([logout.pending.type, logout.fulfilled.type]);
    });

    it('should call "dropToken" once with "logout"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(200);
      const fakeSavedToken = vi.spyOn(tokenStore, 'dropToken');

      await store.dispatch(logout());

      expect(fakeSavedToken).toBeCalledTimes(1);
    });

    it('should dispatch "logout.pending", "logout.rejected" with thunk "logout"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(400);

      await store.dispatch(logout());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([logout.pending.type, logout.rejected.type]);
    });
  });

  describe('Action: "loadOffers"', () => {
    it('should dispatch "loadOffers.pending" and "loadOffers.fulfilled" and update "offers" field with thunk "loadOffers"', async () => {
      const fakeResponse = makeFakeOffers();
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, fakeResponse);

      await store.dispatch(loadOffers());
      const recievedActions = store.getActions();
      const extractedActionTypes = extractActionTypes(recievedActions);
      const loadOffersActionFulfilled = recievedActions.at(1) as ReturnType<
        typeof loadOffers.fulfilled
      >;
      const { payload } = loadOffersActionFulfilled;

      expect(extractedActionTypes).toEqual([
        loadOffers.pending.type,
        loadOffers.fulfilled.type,
      ]);
      expect(payload).toEqual(fakeResponse);
    });

    it('should dispatch "loadOffers.pending" and "loadOffers.rejected"  with thunk "loadOffers"', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(loadOffers());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        loadOffers.pending.type,
        loadOffers.rejected.type,
      ]);
    });
  });

  describe('Action: "loadDetails"', () => {
    it('should dispatch "loadDetails.pending" and "loadDetails.fulfilled" and update "details" field with thunk "loadDetails"', async () => {
      const fakeOfferId = '100500';
      const fakeResponse = makeFakeOfferDetails() as TDetail;
      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${fakeOfferId}`)
        .reply(200, fakeResponse);

      await store.dispatch(loadDetails({ offerId: fakeOfferId }));
      const recievedActions = store.getActions();
      const extractedActionTypes = extractActionTypes(recievedActions);
      const loadDetailsActionFulfilled = recievedActions.at(1) as ReturnType<
        typeof loadDetails.fulfilled
      >;
      const { payload } = loadDetailsActionFulfilled;

      expect(extractedActionTypes).toEqual([
        loadDetails.pending.type,
        loadDetails.fulfilled.type,
      ]);

      expect(payload).toEqual(fakeResponse);
    });

    it('should dispatch "loadDetails.pending" and "loadDetails.rejected" with thunk "loadDetails"', async () => {
      const fakeOfferId = '100500';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${fakeOfferId}`).reply(400);

      await store.dispatch(loadDetails({ offerId: fakeOfferId }));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        loadDetails.pending.type,
        loadDetails.rejected.type,
      ]);
    });
  });

  describe('Action: "loadNearPlaces"', () => {
    it('should dispatch "loadNearPlaces.pending" and "loadNearPlaces.fulfilled" and update "details" field with thunk "loadNearPlaces"', async () => {
      const fakeOfferId = '100500';
      const fakeResponse = makeFakeOffers();
      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${fakeOfferId}${APIRoute.Nearby}`)
        .reply(200, fakeResponse);

      await store.dispatch(loadNearPlaces({ offerId: fakeOfferId }));
      const recievedActions = store.getActions();
      const extractedActionTypes = extractActionTypes(recievedActions);
      const loadNearPlacesActionFulfilled = recievedActions.at(1) as ReturnType<
        typeof loadNearPlaces.fulfilled
      >;
      const { payload } = loadNearPlacesActionFulfilled;

      expect(extractedActionTypes).toEqual([
        loadNearPlaces.pending.type,
        loadNearPlaces.fulfilled.type,
      ]);

      expect(payload).toEqual(fakeResponse);
    });

    it('should dispatch "loadNearPlaces.pending" and "loadNearPlaces.rejected" with thunk "loadNearPlaces"', async () => {
      const fakeOfferId = '100500';
      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${fakeOfferId}${APIRoute.Nearby}`)
        .reply(400);

      await store.dispatch(loadNearPlaces({ offerId: fakeOfferId }));
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        loadNearPlaces.pending.type,
        loadNearPlaces.rejected.type,
      ]);
    });
  });

  describe('Action: "loadFavorites"', () => {
    it('should dispatch "loadFavorites.pending" and "loadFavorites.fulfilled" and update "favorites" field with thunk "loadFavorites"', async () => {
      const fakeResponse = makeFakeOffers({ allFavorites: true });
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, fakeResponse);

      await store.dispatch(loadFavorites());
      const recievedActions = store.getActions();
      const extractedActionTypes = extractActionTypes(recievedActions);
      const loadFavoritesActionFulfilled = recievedActions.at(1) as ReturnType<
        typeof loadFavorites.fulfilled
      >;
      const { payload } = loadFavoritesActionFulfilled;

      expect(extractedActionTypes).toEqual([
        loadFavorites.pending.type,
        loadFavorites.fulfilled.type,
      ]);

      expect(payload).toEqual(fakeResponse);
    });

    it('should dispatch "setFavorite.pending" and "setFavorite.fulfilled" and update "favorite" item with thunk "setFavorite"', async () => {
      const fakeFavoriteId = '100500';
      const fakeFavoriteStatus = 1;
      const fakeUpdatedFavorite = makeFakeOffers({
        allFavorites: true,
        count: 1,
      })[0];

      mockAxiosAdapter
        .onPost(`${APIRoute.Favorite}/${fakeFavoriteId}/${fakeFavoriteStatus}`)
        .reply(200, fakeUpdatedFavorite);

      await store.dispatch(
        setFavorite({ favoriteId: fakeFavoriteId, status: fakeFavoriteStatus })
      );
      const recievedActions = store.getActions();
      const extractedActionTypes = extractActionTypes(recievedActions);
      const setFavoriteActionFulfilled = recievedActions.at(1) as ReturnType<
        typeof setFavorite.fulfilled
      >;
      const { payload } = setFavoriteActionFulfilled;

      expect(extractedActionTypes).toEqual([
        setFavorite.pending.type,
        setFavorite.fulfilled.type,
      ]);
      expect(payload).toEqual(fakeUpdatedFavorite);
    });

    it('should dispatch "setFavorite.pending" and "setFavorite.rejected" with thunk "setFavorite"', async () => {
      const fakeFavoriteId = '100500';
      const fakeFavoriteStatus = 1;
      const fakeUpdatedFavorite = makeFakeOffers({
        allFavorites: true,
        count: 1,
      })[0];

      mockAxiosAdapter
        .onPost(`${APIRoute.Favorite}/${fakeFavoriteId}/${fakeFavoriteStatus}`)
        .reply(400, fakeUpdatedFavorite);

      await store.dispatch(
        setFavorite({ favoriteId: fakeFavoriteId, status: fakeFavoriteStatus })
      );
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        setFavorite.pending.type,
        setFavorite.rejected.type,
      ]);
    });
  });
});
