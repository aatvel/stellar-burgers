import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga)