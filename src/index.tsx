import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { DETAILS } from './mocks/details';
import { REVIEWS } from './mocks/reviews';
import { NEAR_PLACES } from './mocks/near-places';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App nearPlaces={NEAR_PLACES} details={DETAILS} reviews={REVIEWS} />
    </Provider>
  </React.StrictMode>
);
