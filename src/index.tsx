import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { OFFERS } from './mocks/offers';
import { DETAILS } from './mocks/details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={OFFERS} details={DETAILS} />
  </React.StrictMode>
);
