import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
