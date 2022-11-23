import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "./burger-constructor.module.css";
import { checkResponse } from "../../utils/api-ingredients";
import { BURGER_API_URL } from "../../utils/consts";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import {
  closeOrderDetails,
  loadingOrderError,
  loadOrderStart,
  loadOrderSuccess,
  showOrderDetails,
} from "../../services/order/order-actions";
import {
  setBun,
  setMainsAndSauces,
} from "../../services/constructor-ingredients/constructor-actions";
import emptyImg from "../../images/empty_space.png";
import MainsAndSauces from "./mains-and-sauces/mains-and-sauces";

const BurgerConstructor = (props) => {
  const dispatch = useDispatch();
  const { showOrderModal } = useSelector((state) => state.orderReducer);
  const { buns, mainsAndSauces } = useSelector(
    (state) => state.constructorReducer
  );

  //Modal Ingredient
  const notBunsId = [];

  mainsAndSauces.forEach((element) => {
    notBunsId.push(element._id);
  });

  const handleSubmitOrder = () => {
    const requestOptions = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        ingredients: [buns._id, ...notBunsId, buns._id],
      }),
    };
    dispatch(loadOrderStart());
    fetch(`${BURGER_API_URL}/orders`, requestOptions)
      .then(checkResponse)
      .then((result) => {
        dispatch(loadOrderSuccess(result.order.number));
      })
      .catch(() => dispatch(loadingOrderError()));
  };

  const handleClickOrder = () => {
    dispatch(closeOrderDetails());
  };

  //Drag n Drop
  const onDropHandler = (item) => {
    item.type === "bun"
      ? dispatch(setBun(item))
      : dispatch(setMainsAndSauces(item));
  };

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      onDropHandler(item);
    },
  });

  //totalPrice
  const totalPrice = mainsAndSauces.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div ref={dropRef} className={`${BurgerConstructorStyles.container}  `}>
      <section className={BurgerConstructorStyles.orderedItems}>
        <span className={BurgerConstructorStyles.itemBun}>
          {buns === null ? (
            <ConstructorElement
              text="Выберите булочку"
              type="top"
              thumbnail={emptyImg}
            />
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
            mainsAndSauces.map((ingredient, index) => {
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
              <ConstructorElement
                text="Выберите начинку и соус"
                thumbnail={emptyImg}
              />
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
            <ConstructorElement
              text="Выберите булочку"
              type="bottom"
              thumbnail={emptyImg}
              price={null}
            />
          )}
        </span>
      </section>

      <section className={BurgerConstructorStyles.info}>
        <span className={BurgerConstructorStyles.price}>
          <span className={"text text_type_digits-medium"}>
            {totalPrice + 2 * (buns && buns.price)}
          </span>
          <span className={BurgerConstructorStyles.currency}>
            <CurrencyIcon />
          </span>
        </span>

        {showOrderModal && (
          <Modal closeModal={handleClickOrder}>
            <OrderDetails />
          </Modal>
        )}

        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            handleSubmitOrder();
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
