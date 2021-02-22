import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/style.css';
// import { createStore } from 'react';

import Site from './site';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><Site /></BrowserRouter>, document.getElementById('siteWrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
