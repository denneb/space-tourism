import React from 'react';
import ReactDOM from 'react-dom/client';
import SpaceTravelApp from './SpaceTravelApp';

import './sass/styles.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SpaceTravelApp />
  </React.StrictMode>
);
