import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import './css/normalization.css'
import './css/containers.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode >
    <App/>
  </React.StrictMode>
);

