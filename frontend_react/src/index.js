import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// Rendering our whole application in file /public/index.html 
// at div that has the id="root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

