import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'
import './css/styles.css'

import 'bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import App from './js/containers/App';
import reducer from './js/reducers';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
