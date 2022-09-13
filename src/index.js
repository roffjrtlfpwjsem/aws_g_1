import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import Main from './Main';

import reportWebVitals from './reportWebVitals';
 
ReactDOM.render(
  <React.StrictMode>
    <App />

    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
 
reportWebVitals();