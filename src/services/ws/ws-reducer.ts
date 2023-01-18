import {
    WS_CONNECTION_STOP,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from './ws-actions';
import { TWSActions } from './ws-actions';

import { IWSMessage } from '../../utils/types';

type TOrderListState = {
    connected: boolean;
    message: null | IWSMessage;
    error?: null | Event;
};

const initialState: TOrderListState = {
    connected: false,
    message: null,
    error: null,
};

export const wsReducer = (state = initialState, action: TWSActions) => {
    switch (action.type) {
        case WS_CONNECTION_STOP: {
            return {
                ...state,
                connected: false,
                message: null,
                error: null
            };
        }
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                connected: true,
                error: null,
            };
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                connected: false,
                error: action.payload
            };
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                connected: false
            };
        }
        case WS_GET_MESSAGE: {
            return {
                ...state,
                message: { ...action.payload },
            };
        }
        default: {
            return state;
        }
    }
};