import {
  ingredients,
} from "../../utils/test-const";
import {
  IOrderActions,
  onLoadingError,
  onLoadingStart,
  onLoadingSuccess,
  onResetOrder,
} from "./order-actions";
import {
  orderReducer as reducer,
  initialState as state,
} from "./order-reducer";

describe("orderReducer test", () => {

  test('Проверка начального состояния', () => {
    expect(reducer(undefined, {} as IOrderActions)).toEqual(
        state
    );
  });

  it("load order start", () => {
    expect(reducer(state, onLoadingStart(ingredients as any))).toEqual({
      ...state,
      loading: true,
      showOrderModal: true,
    });
  });

  it("load order success", () => {
    const number = 123454;
    expect(reducer(state, onLoadingSuccess(number))).toEqual({
      ...state,
      showOrderModal: true,
      order: number,
      loading: false,
    });
  });

  it("load order error", () => {
    const err = 'err';
    expect(reducer(state, onLoadingError(err))).toEqual({
      ...state,
      error: true
    });
  });

  it("reset order", () => {
    expect(reducer(state, onResetOrder())).toEqual({
      ...state,
      order: null,
    });
  });
});
