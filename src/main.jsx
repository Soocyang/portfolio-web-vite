import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/fonts/consola.ttf';
import './assets/fonts/consolab.ttf'
import './assets/fonts/consolai.ttf'
import './assets/fonts/consolaz.ttf'

import 'swiper/css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);