import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Settings } from './const';
import { OFFERS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={OFFERS} offerCount={Settings.Offers} />
  </React.StrictMode>
);
