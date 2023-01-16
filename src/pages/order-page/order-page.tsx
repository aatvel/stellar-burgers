import React, { FC, CSSProperties } from "react";
import styles from "./order-page.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";

import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import { IOrder, StatusCodes, TItem, useAppSelector } from "../../utils/types";
import FeedItem from "../feed-list/feed-item/feed-item";
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
  

const OrderPage: FC<IBackground> = ({background}) => {
  const { message } = useAppSelector((s) => s.wsReducer);
  const { _id } = useParams();

  const currentOrder = message?.orders.filter((order) => order._id === _id);
  console.log(currentOrder);

  const { data } = useAppSelector<{ data: Array<TItem> }>(
    (state) => state.ingredients
  );

  const orderIngredients =
    currentOrder &&
    currentOrder[0].ingredients.map((id: string) =>
      data.filter((ingredient: TItem) => ingredient._id === id)
    );
  if (currentOrder) {
    console.log(currentOrder);
  }
  console.log(orderIngredients);
  //   const totalPrice =  orderIngredients.reduce((acc, curr) => acc + (curr?.price || 0), 0)

  return currentOrder ? (
    <div className={styles.header}>
      <div>
        <div className={`text text_type_digits-default mb-10`}>
          {currentOrder[0].number}
        </div>
        <div className={` text text_type_main-medium mb-3`}>
          {currentOrder[0].name}
        </div>
        {currentOrder[0].status === StatusCodes.done ? (
          <div className={`text text_type_main-default text_color_success`}>
            Выполнен
          </div>
        ) : (
          <div className={`text text_type_main-default text_color_success`}>
            В работе
          </div>
        )}
      </div>
      <div className={` mb-10`}>
        <div className="text text_type_main-medium mb-6">Состав:</div>

        <div className={styles.images}>
          {orderIngredients &&
            orderIngredients.map((ingredient) =>
              ingredient.map((image, index) => (
                <img
                  src={image.image}
                  className={styles.ingredient}
                  key={index}
                />
              ))
            )}
        </div>
      </div>
      <div>
        <div
          className={` text text_type_main-default text_color_inactive`}
        ></div>
        <div>
          {/* <span className="text text_type_digits-default mr-2">
            {totalPrice}
          </span> */}
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  ) : null;
};

export default OrderPage;
