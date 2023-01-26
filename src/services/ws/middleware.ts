import type { Middleware, MiddlewareAPI } from "redux";
import type { RootState, AppDispatch } from "../store";

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
      const { onStart, onOpen, onError, onMessage, onClose, sendMessage } = wsActions;

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
        socket.onclose = () => {
          dispatch({
            type: onClose
        });
        };

        socket.send = (event) => {         
          let data = JSON.stringify(event)
          dispatch({
            type: sendMessage,
            payload: data
          })
        }

      }

      next(action);
    };
  }) as Middleware;
};
