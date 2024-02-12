
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import AppState from './contexts/AppState';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppState>
        <App />
    </AppState>
);
