import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import rootSaga from "./sagas";
import { socketMiddleware } from "./ws/middleware";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "./ws/ws-actions";
import { wsUrl } from "../utils/consts";

const wsActions = {
  onStart: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, socketMiddleware(wsUrl, wsActions)));

export const store = createStore(rootReducer, enhancer);

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga)