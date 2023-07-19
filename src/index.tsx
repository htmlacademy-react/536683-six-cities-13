import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { OFFERS } from './mocks/offers';
import { DETAILS } from './mocks/details';
import { REVIEWS } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={OFFERS} details={DETAILS} reviews={REVIEWS} />
  </React.StrictMode>
);
