import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/scss/style.scss';
import App from './App';
const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route to='/' component={App} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')
);
