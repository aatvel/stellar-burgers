import React, { FC, CSSProperties, useEffect, useMemo } from "react";
import styles from "./order-page.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import { IOrder, useAppDispatch, useAppSelector } from "../../utils/types";
import { useParams } from "react-router-dom";
import { StatusCodes, TItem } from "../../utils/types";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { wsUrl } from "../../utils/consts";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../../services/ws/ws-actions";
import OrderItem from "./order-item";

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
  const { data } = useAppSelector<{ data: Array<TItem> }>(
    (state) => state.ingredients
  );
  const currentOrder = message?.orders.filter(
    (order: IOrder) => order._id === _id
  );

  const uniqueIngredients = useMemo(
    () =>
      data?.filter(
        (item: TItem) =>
          currentOrder && currentOrder[0].ingredients.includes(item._id)
      ),
    [currentOrder, data]
  );

  console.log(uniqueIngredients);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders/all`));
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, []);

  const orderIngredients = useMemo(
    () =>
      currentOrder &&
      currentOrder[0].ingredients.map((ingredient: string) => {
        if (ingredient !== null && ingredient !== undefined) {
          const orderItem = data.filter(
            (item: TItem) => ingredient && item._id === ingredient
          );
          return orderItem[0];
        }
      }),
    [currentOrder, data]
  );

  const totalPrice = useMemo(
    () =>
      orderIngredients?.reduce((sum, elem) => {
        if (elem) {
          return elem.price + sum;
        } else {
          return 0;
        }
      }, 0),
    [orderIngredients]
  );

  return currentOrder ? (
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
          <div
            className={` ${styles.done}text text_type_main-default text_color_success mb-10 `}
          >
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
        {uniqueIngredients?.map((item, index) => (
          <OrderItem key={index} order={currentOrder[0]} item={item} />
        ))}
      </ul>

      <div className={styles.orderPriceDetails}>
        <p className="text text_type_main-small text_color_inactive">
          <FormattedDate date={new Date(currentOrder[0].createdAt)} />
        </p>
        <div className={styles.orderPriceDetails}>
          <p className="text text_type_digits-default">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  ) : null;
};

export default OrderPage;
