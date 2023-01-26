import {
  setBun,
  setMainsAndSauces,
  reoderItem,
  deleteItem,
  resetItem,
  TConstructorActions
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
    expect(reducer(state, setBun({ pinkBun, id } as any))).toEqual({
      ...state,
      buns: { pinkBun, id },
    });
  });

  it("add an ingredient", () => {
    expect(
      reducer(state, setMainsAndSauces({ ingredientMain, id } as any))
    ).toEqual({
      ...state,
      mainsAndSauces: [...state.mainsAndSauces, { ingredientMain, id }],
    });
  });

  it("add another ingredient", () => {
    expect(
      reducer({
        ...state,
        mainsAndSauces: [ingredientMain],
      }, setMainsAndSauces({ galaxySauce, id } as any))
    ).toEqual({
      ...state,
      mainsAndSauces: [ingredientMain, {galaxySauce, id}],
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
