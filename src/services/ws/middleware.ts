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
import { TSocketMiddlewareActions } from "../../utils/types";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TSocketMiddlewareActions
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: null | WebSocket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { onStart, onOpen, onError, onMessage, onClose } = wsActions;

      if (type === onStart) {
        // объект класса WebSocket
        socket = new WebSocket(payload);
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch({
            type: onOpen,
          });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = () => {
          dispatch({
            type: onError
          });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          let { data } = event;
          data = JSON.parse(data);
          dispatch({
              type: onMessage,
              payload: data
          });
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          dispatch({
            type: onClose
        });
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
