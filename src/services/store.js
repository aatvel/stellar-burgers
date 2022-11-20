import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app/app';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './root-reducer';
// import thunk from 'redux-thunk';

const middleWares = []
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleWares));


export const store = createStore(rootReducer, enhancer);

