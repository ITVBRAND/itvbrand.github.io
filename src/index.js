import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";

import './styles/normalize.css';
import './styles/fonts.css';
import './styles/styles.css';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>
);
