import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/scss/style.scss';
import './utils/importAllSvg';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
