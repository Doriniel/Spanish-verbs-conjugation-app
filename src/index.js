import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import loginAnonymous from './network/loginAnonymous';

loginAnonymous()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
