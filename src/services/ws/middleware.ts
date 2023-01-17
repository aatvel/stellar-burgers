import type { Middleware, MiddlewareAPI } from "redux";
import type { RootState, AppDispatch } from "../store";
import {
  wsConnectionStart,
  wsConnectionStop,
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage,
  wsSendMessage,
  TWSActions,
} from "./ws-actions";



export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: null | WebSocket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsConnectionStart(payload).type) {
        // объект класса WebSocket
        socket = new WebSocket(payload);
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch(wsConnectionSuccess());
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch(wsConnectionError(event));
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          dispatch(wsGetMessage(JSON.parse(data)));
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch(wsConnectionError(event));
        };

        if (type === wsSendMessage(payload).type) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
