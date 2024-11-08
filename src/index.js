import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/normalize.css';
import './styles/fonts.css';
import './styles/styles.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Создаем корень

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
