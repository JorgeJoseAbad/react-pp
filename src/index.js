import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

ReactDOM.render(
    <App title="Welcome to React"/>,
    document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
