import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import App from './App';
import AppDos from './AppDos'


const rootHeader = ReactDOM.createRoot(document.getElementById('rootHeader'));
const root = ReactDOM.createRoot(document.getElementById('root'));

rootHeader.render(
    <App />
   
);
root.render(
    <AppDos/>
)
