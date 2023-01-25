import {
  modalReducer as reducer,
  initialState as state,
  SHOW_FEED_DETAILS,
  CLOSE_FEED_DETAILS,
} from "./modal-reducer";

describe("modalReducer test", () => {
  it("show ingredient info", () => {
    const action = {
      type: SHOW_FEED_DETAILS,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      showFeedModal: true,
    });
  });

  it("close ingredient info", () => {
    const action = {
      type: CLOSE_FEED_DETAILS,
    };
    expect(reducer(state, action)).toEqual({
      ...state,
      showFeedModal: false,
    });
  });
});
