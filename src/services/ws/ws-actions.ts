import { IWSMessage } from "../../utils/types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_STOP: 'WS_CONNECTION_STOP' = 'WS_CONNECTION_STOP';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

export interface IWSConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string;
}

export interface IWSConnectionStop {
    readonly type: typeof WS_CONNECTION_STOP;
}

export interface IWSConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWSConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: IWSMessage;
}

export interface IWSSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
    readonly payload: string;
}

export type TWSActions =
    | IWSConnectionStart
    | IWSConnectionStop
    | IWSConnectionSuccess
    | IWSConnectionError
    | IWSConnectionClosed
    | IWSGetMessage
    | IWSSendMessage;

export const wsConnectionStart = (payload: string): IWSConnectionStart => ({
    type: WS_CONNECTION_START,
    payload
});

export const wsConnectionStop = (): IWSConnectionStop => ({
    type: WS_CONNECTION_STOP,
});

export const wsConnectionSuccess = (): IWSConnectionSuccess => ({
    type: WS_CONNECTION_SUCCESS
});

export const wsConnectionError = (payload: Event): IWSConnectionError => ({
    type: WS_CONNECTION_ERROR,
    payload
});

export const wsConnectionClosed = (): IWSConnectionClosed => ({
    type: WS_CONNECTION_CLOSED
});

export const wsGetMessage = (payload: IWSMessage): IWSGetMessage => ({
    type: WS_GET_MESSAGE,
    payload
});

export const wsSendMessage = (payload: string): IWSSendMessage => ({
    type: WS_SEND_MESSAGE,
    payload
});

