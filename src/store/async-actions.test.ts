import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { checkAuthStatus } from './async-actions';
import { TRootState } from '../types/state';
import { APIRoute, AuthStatus, NameSpace } from '../const';
import { TAppThunkDispatch, extractActionTypes } from '../utils/mocks';
import { Action } from '@reduxjs/toolkit';
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

const fakeAxios = vi.mocked(axios, true);

describe('Async actions', () => {
  const mockAxiosAdapter = new MockAdapter(fakeAxios);
  const middleware = [thunk.withExtraArgument(fakeAxios)];
  const mockStoreCreator = configureMockStore<
    TRootState,
    Action<string>,
    TAppThunkDispatch
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [NameSpace.User]: { authStatus: AuthStatus.Unknown, userEmail: '' },
    });
  });

  describe('Action: checkAuthStatus', () => {
    it('should dispatch "checkAuthStatus.pending", "checkAuthStatus.fulfilled" with thunk "checkAuthStatus"', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthStatus());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthStatus.pending.type,
        checkAuthStatus.fulfilled.type,
      ]);
    });
  });
});
