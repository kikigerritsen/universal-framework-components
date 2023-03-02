/// <reference types="react-scripts" />
/// <reference types="./shared-styles" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// const moduleA = require('shared-styles');
// console.log('moduleA', moduleA)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
