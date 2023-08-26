import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { checkAuthStatus, login, logout } from './async-actions';
import { TRootState } from '../types/state';
import { APIRoute } from '../const';
import { TAppThunkDispatch, extractActionTypes } from '../utils/mocks';
import { Action } from '@reduxjs/toolkit';
import * as tokenStore from '../services/token';
import axios from 'axios';

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
      OFFERS: { offers: [] },
    });
  });

  describe('Action: checkAuthStatus', () => {
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

  describe('Action: Login', () => {
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

  describe('Action: Logout', () => {
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
});
