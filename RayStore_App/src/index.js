import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter basename="4p22-final-project-ravil-utemishev">
    <App />
    </BrowserRouter>
</React.StrictMode>
);
