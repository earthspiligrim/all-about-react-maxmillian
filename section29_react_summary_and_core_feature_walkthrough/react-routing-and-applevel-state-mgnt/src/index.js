import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* wrap your App component tag within BrowserRouter tag so that it can lay down a base of it as a router*/}
    <App />
  </BrowserRouter>
);
