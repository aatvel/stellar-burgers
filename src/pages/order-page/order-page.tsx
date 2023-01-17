import React, { FC, CSSProperties, useEffect } from "react";
import styles from "./order-page.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { useParams } from "react-router-dom";

import { StatusCodes, TItem } from "../../utils/types";

import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

import { wsUrl } from "../../utils/consts";
import { wsConnectionClosed, wsConnectionStart } from "../../services/ws/ws-actions";
import { PreLoader } from "../../components/app/preloader";
import { getAccessToken } from "../../utils/cookie";

const styleIngredient: CSSProperties = {
  width: 720,
  padding: "0 80px",
  margin: "0 auto",
  marginTop: 120,
  textAlign: "center",
  overflow: "hidden",
};

export interface IBackground {
  background: object | null;
}

const OrderPage: FC<IBackground> = ({ background }) => {
  

  const { message } = useAppSelector((s) => s.wsReducer);
  const { _id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders/all`));
    return ()=> {
      dispatch(wsConnectionClosed())
    }
  
  }, []);


  const currentOrder = message?.orders.filter((order) => order._id === _id);

  const { data } = useAppSelector<{ data: Array<TItem> }>(
    (state) => state.ingredients
  );

  const orderIngredients =
    currentOrder ?
    currentOrder[0].ingredients.map((id: string) =>
      data.filter((ingredient: TItem) => ingredient._id === id)
    ): null;
 
//   const totalPrice = orderIngredients?.reduce(
//     (acc, curr) => acc + (curr[0].price || 0),
//     0
//   );


  return  currentOrder ? (
    <div className={styles.container}>
      <div>
        <div
          className={`${styles.orderNumber} text text_type_digits-default mb-10`}
        >
          {"#"}
          {currentOrder[0].number}
        </div>
        <div className={` ${styles.orderName} text text_type_main-medium mb-3`}>
          {currentOrder[0].name}
        </div>
        {currentOrder[0].status === StatusCodes.done ? (
          <div className={` ${styles.done}text text_type_main-default text_color_success mb-10 `} >
            Выполнен
          </div>
        ) : (
          <div className={`text text_type_main-default text_color_success`}>
            В работе
          </div>
        )}
      </div>

      <div className={`text text_type_main-medium mb-6`}>Состав:</div>

      <ul className={`${styles.ingredientsList} mb-10 custom-scroll`}>
        <li className={` mr-6`}>
          {orderIngredients &&
            orderIngredients.map((ingredient) =>
              ingredient.map((image, index) => (
                <>
                  <div className={`${styles.image} pr-6`}>
                    <img
                      src={image.image}
                      className={styles.ingredient}
                      key={index}
                    />
                    <p
                      className={`${styles.ingredientName} text text_type_main-default ml-4 mr-4`}
                    >
                      {image.name}
                    </p>
                  </div>

                  <div className={styles.orderPrice}>
                    <span className="text text_type_digits-default mr-2">
                      {`${ingredient.length} x ${image.price}`}
                    </span>
                    <CurrencyIcon type="primary" />
                  </div>
                </>
              ))
            )}
        </li>
      </ul>

      <div className={styles.orderPriceDetails}>
        <p className="text text_type_main-small text_color_inactive">
          <FormattedDate date={new Date(currentOrder[0].createdAt)} />
        </p>
        <div className={styles.orderPriceDetails}>
          <p className="text text_type_digits-default">{}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  ) : null;
};

export default OrderPage;
