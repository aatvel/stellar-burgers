import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { OrderContext } from "../../services/order-context";
import { checkResponse } from "../../utils/api-ingredients";
import {BURGER_API_URL} from '../../utils/consts'

const BurgerConstructor = (props) => {
  const dispatch = useDispatch();
  const {buns, mainsAndSauces} = useSelector((state) => state.constructor)
console.log(mainsAndSauces, buns)
  // const handleSubmitOrder = () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ingredients: [buns[0]._id, ...orderId, buns[0]._id],
  //     }),
  //   };

  //   fetch(`${BURGER_API_URL}/orders`, requestOptions)
  //     .then(checkResponse)
  //     .then((result) => {
  //       setOrderNumber(result.order.number);
  //     });
  // };

  return (
    <div className={`${BurgerConstructorStyles.container}  `}>
      <section className={BurgerConstructorStyles.orderedItems}>
        <span className={BurgerConstructorStyles.itemBun}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={buns && buns.name + " (верх)"}
            price={buns && buns.price}
            thumbnail={buns && buns.image_mobile}
          />
        </span>

        <ul className={BurgerConstructorStyles.scroll}>
          {mainsAndSauces && mainsAndSauces.map((element, index) => {
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
            text={buns && buns.name + " (низ)"}
            price={buns && buns.price}
            thumbnail={buns && buns.image_mobile}
          />
        </span>
      </section>

      <section className={BurgerConstructorStyles.info}>
        <span className={BurgerConstructorStyles.price}>
          <span className={"text text_type_digits-medium"}>
            {/* {totalPrice + buns[0].price * 2} */}
          </span>
          <span className={BurgerConstructorStyles.currency}>
            <CurrencyIcon />
          </span>
        </span>

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            // handleSubmitOrder();
            // props.toggleModal();
          }}
        >
          Оформить заказ
        </Button>
      </section>
    </div>
  );
};

// BurgerConstructor.propTypes = {
//   toggleModal: PropTypes.func.isRequired,
//   setOrderNumber: PropTypes.func.isRequired,
// };

export default React.memo(BurgerConstructor);
