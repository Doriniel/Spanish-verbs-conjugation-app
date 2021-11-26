import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import loginAnonymous from './network/loginAnonymous';

loginAnonymous()

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById('root')
);
