import { wsUrl } from "../../utils/consts";
import { allOrders } from "../../utils/test-const";
import {
  wsConnectionStart,
  wsConnectionStop,
  wsConnectionSuccess,
  wsConnectionError,
  wsConnectionClosed,
  wsGetMessage
} from "./ws-actions";
import { wsReducer as reducer, initialState as state } from "./ws-reducer";

describe("websockets reducer test", () => {
  it(" ws connection start", () => {
    expect(reducer(state, wsConnectionStart(`${wsUrl}/orders/all`))).toEqual({
      ...state,
    });
  });

  it("ws connection stop", () => {
    expect(reducer(state, wsConnectionStop())).toEqual({
      ...state,
      connected: false,
      message: null,
      error: null,
    });
  });

  it("ws connection success", () => {
    expect(reducer(state, wsConnectionSuccess())).toEqual({
      ...state,
      connected: true,
      error: null
    });
  });

  it("ws connection error", () => {
    const err = 'err'
    expect(reducer(state, wsConnectionError(err as any))).toEqual({
      ...state,
      connected: false,
      error: err
    });
  });

  it("ws connection closed", () => {
    expect(reducer(state, wsConnectionClosed())).toEqual({
      ...state,
      connected: false
    });
  });

  it("ws connection get a message", () => {
    expect(reducer(state, wsGetMessage(allOrders as any))).toEqual({
      ...state,
      message: allOrders
    });
  });
  
});
