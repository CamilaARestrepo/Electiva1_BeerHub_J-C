import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BeerApp } from './BeerApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BeerApp />
  </React.StrictMode>
);
