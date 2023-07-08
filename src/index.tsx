import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

enum Settings {
  Offers = 20,
}

root.render(
  <React.StrictMode>
    <App offerCount={Settings.Offers} />
  </React.StrictMode>
);
