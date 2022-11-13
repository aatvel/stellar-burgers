import React from "react";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "./burger-constructor.module.css";
import orderedItemes from "../../utils/order";
import { ingredientType } from "../../utils/types";
import PropTypes from "prop-types";
import { priceCounter, priceReducer } from "../services/price-counter";
import Modal from "../modal/modal";
import { ChosenItemsContext } from "../services/data-context";

function ConstructorItem({ item }) {
  return (
    <li className={BurgerConstructorStyles.item}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={item.name}
        price={item.price}
        thumbnail={item.image}
      />
    </li>
  );
}

function BurgerConstructor({ toggleModal }) {
  const { chosenItems } = React.useContext(ChosenItemsContext);
  const [costState, costDispatcher] = React.useReducer(
    priceCounter,
    priceReducer
  );

  React.useEffect(() => {
    chosenItems.forEach((item) =>
      costDispatcher({ type: "increment", payload: item.price })
    );
  }, []);

 

  return (
    <div className={`${BurgerConstructorStyles.container}  `}>
      <section className={BurgerConstructorStyles.orderedItems}>
        {orderedItemes
          .filter((el) => el.type === "bun")
          .map((el, index) => (
            <span className={BurgerConstructorStyles.itemBun}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${el.name} (верх)`}
                price={el.price}
                thumbnail={el.image}
              />
            </span>
          ))}

        <ul className={BurgerConstructorStyles.scroll}>
          {chosenItems
            .filter((el) => el.type !== "bun")
            .map((el, index) => {
              for (let i = 0; i < el.qty; i++) {
                return <ConstructorItem key={index} item={el} />;
              }
            })}
        </ul>

        {chosenItems
          .filter((el) => el.type === "bun")
          .map((el, index) => (
            <span className={BurgerConstructorStyles.itemBun}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${el.name} (низ)`}
                price={el.price}
                thumbnail={el.image}
              />
            </span>
          ))}
      </section>

      <section className={BurgerConstructorStyles.info}>
        <span className={BurgerConstructorStyles.price}>
          <span className={"text text_type_digits-medium"}>
            {costState.count}
          </span>
          <span className={BurgerConstructorStyles.currency}>
            <CurrencyIcon />
          </span>
        </span>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={toggleModal}
        >
          Оформить заказ
        </Button>
      </section>
    </div>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default React.memo(BurgerConstructor);
