import { pinkBun } from "../../utils/test-const";
import { showDetails, closeDetails } from "./details-actions"
import { detailsReducer as reducer, initialState as state } from "./details-reducer"


describe("details reducer test", () => {
    it("show ingredient info", () => {
      expect(reducer(state, showDetails(pinkBun))).toEqual({
        ...state,
        showModal: true,
        ingredient: pinkBun
      });
    });
    it("show ingredient info", () => {
        expect(reducer(state, closeDetails())).toEqual({
          ...state,
          showModal: false
        });
      });
  });
  