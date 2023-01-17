import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { IOrder, TItem } from "../../utils/types";
import style from "./order-page.module.css";

interface IOrderComposition {
  item: TItem;
  order: IOrder;
}

const OrderItem: FC<IOrderComposition> = ({ item, order }) => {
  const ingredientsCount = order?.ingredients.filter(
    (elemId: string) => elemId === item._id
  ).length;

  return (
    <li className={` mr-6`}>
      <div className={`${style.image} pr-6`}>
        <img className={style.ingredient} src={item.image} alt={item.name} />
        <p className={`${style.ingredientName} text text_type_main-default ml-4 mr-4`}>{item.name}</p>
      </div>
      <div className={style.orderPrice}>
        <span className="text text_type_digits-default mr-2">
          {ingredientsCount} x {item.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
    </li>
  );
};

export default OrderItem;
