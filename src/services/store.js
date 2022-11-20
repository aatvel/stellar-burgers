import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app/app';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';

const middleWares = []
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));


export const store = createStore(rootReducer, enhancer);

