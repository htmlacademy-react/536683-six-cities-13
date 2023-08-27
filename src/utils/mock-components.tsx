import thunk from 'redux-thunk';
import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { MemoryRouter } from 'react-router-dom';
import { TRootState } from '../types/state';
import { createApi } from '../services/api';
import axios from 'axios';
import { TAppThunkDispatch } from './mocks';
import { Action } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const withRouter = (component: JSX.Element) => (
  <MemoryRouter>{component}</MemoryRouter>
);

type TComponentWithStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

const withStore = (
  component: JSX.Element,
  initialState: Partial<TRootState> = {}
): TComponentWithStore => {
  const axois = createApi();
  const mockAxiosAdapter = new MockAdapter(axois);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    TRootState,
    Action<string>,
    TAppThunkDispatch
  >(middleware);
  const mockStore = mockStoreCreator(initialState);

  return {
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  };
};

export { withRouter, withStore };
