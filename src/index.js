import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { default as App } from './App.js'
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
