import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';
import App from './App';
import './index.css';

ReactDOM.render(
	<Provider store={store}> // provider component makes store available to all components
  <App />
  </Provider>,
  document.getElementById('root')
);
