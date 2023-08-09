import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  checkAuthStatus,
  loadFavorites,
  loadOffers,
} from './store/async-actions';
import { ErrorMessage } from './components/error-message/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthStatus());
store.dispatch(loadOffers());
store.dispatch(loadFavorites());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
