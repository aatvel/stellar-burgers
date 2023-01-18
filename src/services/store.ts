import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import rootSaga from "./sagas";
import { socketMiddleware } from "./ws/middleware";
import { wsConnectionStart, wsConnectionStop, wsConnectionSuccess, wsConnectionError, wsConnectionClosed, wsGetMessage, wsSendMessage } from "./ws/ws-actions";
import { wsUrl } from "../utils/consts";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, socketMiddleware(wsUrl)));

export const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga)