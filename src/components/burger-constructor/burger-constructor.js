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

const BurgerConstructor = (props) => {
  return (
    <div className={`${BurgerConstructorStyles.container}  `}>
      <section className={BurgerConstructorStyles.orderedItems}>
        <span className={BurgerConstructorStyles.itemBun}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={props.data[0].price}
            thumbnail={props.data[0].image_mobile}
          />
        </span>

        <ul className={BurgerConstructorStyles.scroll}>
          {orderedItemes.map((element, index) => {
            return (
              <li key={index} className={BurgerConstructorStyles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={element.name}
                  price={element.price}
                  thumbnail={element.image_mobile}
                />
              </li>
            );
          })}
        </ul>

        <span className={`${BurgerConstructorStyles.itemBun} `}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={props.data[0].price}
            thumbnail={props.data[0].image_mobile}
          />
        </span>
      </section>

      <section className={BurgerConstructorStyles.info}>
        <span className={BurgerConstructorStyles.price}>
          <span className={"text text_type_digits-medium"}>5760</span>
          <span className={BurgerConstructorStyles.currency}>
            <CurrencyIcon />
          </span>
        </span>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={props.toggleModal}
        >
          Оформить заказ
        </Button>
      </section>
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default BurgerConstructor;
