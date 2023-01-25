import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "./burger-constructor.module.css";

import { onLoadingStart } from "../../services/order/order-actions";
import {
  setBun,
  setMainsAndSauces,
} from "../../services/constructor-ingredients/constructor-actions";
import MainsAndSauces from "./mains-and-sauces/mains-and-sauces";
import { TItem, useAppDispatch, useAppSelector } from "../../utils/types";

const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch();

  const { buns, mainsAndSauces } = useAppSelector((s) => s.constructorReducer);
  const isBunAdded = buns !== undefined;

  //Modal Ingredient
  const notBunsId: Array<string> = [];

  mainsAndSauces.forEach((element: { _id: string }) => {
    notBunsId.push(element._id);
  });

  const navigate = useNavigate();
  const auth = localStorage.getItem("refreshToken");

  const handleSubmitOrder = () => {
    if (auth) {
      if (buns !== null) {
        dispatch(
          onLoadingStart({ ingredients: [buns._id, ...notBunsId, buns._id] })
        );
      }
    } else {
      navigate("/login", { replace: true });
    }
  };

  //Drag n Drop
  const onDropHandler = (item: TItem) => {
    item.type === "bun"
      ? dispatch(setBun(item))
      : dispatch(setMainsAndSauces(item));
  };

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item: TItem) {
      onDropHandler(item);
    },
  });

  //totalPrice
  const totalPrice = mainsAndSauces.reduce(
    (acc: number, curr: { price: number }) => {
      return acc + curr.price;
    },
    0
  );

  return (
    <div ref={dropRef} className={`${BurgerConstructorStyles.container}  `}>
      <section className={BurgerConstructorStyles.orderedItems}>
        <span className={BurgerConstructorStyles.itemBun}>
          {buns === null ? (
           <p className={`${BurgerConstructorStyles.placeholder} text text_type_main-medium`}>
           Выберите булочку
         </p>
          ) : (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={buns && buns.name + " (верх)"}
              price={buns && buns.price}
              thumbnail={buns && buns.image_mobile}
            />
          )}
        </span>

        <ul className={BurgerConstructorStyles.scroll}>
          {mainsAndSauces.length > 0 ? (
            mainsAndSauces.map((ingredient: any, index: number) => {
              return (
                <MainsAndSauces
                  key={ingredient.id}
                  index={index}
                  ingredient={ingredient}
                />
              );
            })
          ) : (
            <li className={BurgerConstructorStyles.item}>
              <p className={`${BurgerConstructorStyles.placeholder} text text_type_main-medium`}>
            Выберите начинку и соус
          </p>
            </li>
          )}
        </ul>

        <span className={`${BurgerConstructorStyles.itemBun} `}>
          {buns !== null ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={buns && buns.name + " (низ)"}
              price={buns && buns.price}
              thumbnail={buns && buns.image_mobile}
            />
          ) : (
            <p className={`${BurgerConstructorStyles.placeholder} text text_type_main-medium`}>
            Выберите булочку
          </p>
          )}
        </span>
      </section>

      <section className={BurgerConstructorStyles.info}>
        <span className={BurgerConstructorStyles.price}>
          <span className={"text text_type_digits-medium"}>
            {buns ? totalPrice + 2 * buns.price : totalPrice}
          </span>
          <span className={BurgerConstructorStyles.currency}>
            <CurrencyIcon type="primary" />
          </span>
        </span>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            handleSubmitOrder();
          }}
          disabled={!isBunAdded}
        >
          Оформить заказ
        </Button>
      </section>
    </div>
  );
};

export default React.memo(BurgerConstructor);
