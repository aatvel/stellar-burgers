import {
  setBun,
  setMainsAndSauces,
  reoderItem,
  deleteItem,
  resetItem,
  TConstructorActions,
  SET_BUN,
  SET_MAINS_AND_SAUCES
} from "./constructor-actions";
import {
  pinkBun,
  galaxySauce,
  ingredientMain,
} from "../../utils/test-const";
import {
  initialState as state,
  constructorReducer as reducer,
} from "./constructor-reducer";
import { id } from "./constructor-actions";
import { useAppSelector } from "../../utils/types";

describe("burger-constructor reducer test", () => {
  
  test('Проверка начального состояния', () => {
    expect(reducer(undefined, {} as TConstructorActions)).toEqual(
        state
    );
  });

  it("add a bun", () => {
    const action = {
      type: SET_BUN,
      buns: {...pinkBun, id: 123}
    }
    expect(reducer(state, action as any)).toEqual({
      ...state,
      buns: { ...pinkBun, id: 123 },
    });
  });

  it("add an ingredient", () => {
    const action = {
      type: SET_MAINS_AND_SAUCES,
      mainsAndSauces: {...ingredientMain, id: 123}
    }
    expect(reducer(state, action as any)).toEqual({
      ...state,
      mainsAndSauces: [{ ...ingredientMain, id: 123 }],
    });
  });

  it("add another ingredient", () => {
    const action = {
      type: SET_MAINS_AND_SAUCES,
      mainsAndSauces: {...galaxySauce, id: 321}
    }

    expect(reducer({...state, mainsAndSauces: [ingredientMain]}, action as any)).toEqual({
      ...state,
      mainsAndSauces: [ingredientMain, {...galaxySauce, id: 321}],
    });
  });

  it("reorder ingredients", () => {
    expect(
      reducer(
        {
          ...state,
          mainsAndSauces: [galaxySauce, galaxySauce, ingredientMain],
        },
        reoderItem({
          from: 2,
          to: 1,
        })
      )
    ).toEqual({
      ...state,
      mainsAndSauces: [galaxySauce, ingredientMain, galaxySauce],
    });
  });

  it("delete an ingredient", () => {
    expect(
      reducer(
        { ...state, mainsAndSauces: [galaxySauce, ingredientMain] },
        deleteItem(1)
      )
    ).toEqual({
      ...state,
      mainsAndSauces: [galaxySauce],
    });
  });

  it("constructor reset", () => {
    expect(
      reducer(
        {
          ...state,
          buns: pinkBun,
          mainsAndSauces: [galaxySauce, ingredientMain],
        },
        resetItem(null)
      )
    ).toEqual(state);
  });
});
