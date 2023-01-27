import { onEditSuccess, onEditStart, onEditError, TEditActions } from "./edit-actions";
import { editReducer as reducer, initialState as state } from "./edit-reducer";

const user = {
  name: "test",
  email: "test@mail.ru",
};

describe("editReducer test", () => {

  test('Проверка начального состояния', () => {
    expect(reducer(undefined, {} as TEditActions)).toEqual(
        state
    );
  });

  it("edit user info", () => {
    expect(reducer(state, onEditStart(user))).toEqual({
      ...state,
      loading: true,
    });
  });

  it("edit user info", () => {
    expect(reducer(state, onEditSuccess(user as any))).toEqual({
      ...state,
      loading: false,
      userInfo: user,
    });
  });

  it("edit user info error", () => {
    const err = 'error'
    expect(reducer(state, onEditError(err))).toEqual({
      ...state,
      error: true,
      loading: false
    });
  });

});
