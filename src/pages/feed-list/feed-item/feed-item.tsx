import { FC} from "react";
import styles from "./feed-item.module.css";
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { IOrder, TItem } from "../../../utils/types";
import { useAppSelector } from "../../../utils/types";

interface IOrderListItem {
  order: IOrder;
}

const FeedItem: FC<IOrderListItem> = ({ order }) => {
  const location = useLocation();

  const { data } = useAppSelector<{ data: Array<TItem> }>(
    (state) => state.ingredients
  );
  const { buns, mainsAndSauces } = useAppSelector((s) => s.constructorReducer);

  const orderIngredients = order.ingredients.map((id: string) =>
    data.find((ingredient: TItem) => ingredient._id === id)
  );


  const totalPrice =  orderIngredients.reduce((acc, curr) => acc + (curr?.price || 0), 0)

  return (
    <div className={`${styles.container} p-6 mr-4`}>
        
      <div className={styles.description}>
        <div className={`${styles.number} text text_type_digits-default`}>
          {order.number}
        </div>
        <div
          className={`${styles.datetime} text text_type_main-default text_color_inactive`}
        >
            <FormattedDate date={new Date(order.createdAt)} />
        </div>
      </div>
      <div className={styles.order}>
        <div className={`${styles.name} text text_type_main-medium`}>
          <Link
            to={{
              pathname: `${location.pathname}/${order._id}`,
            }}
            className={styles.link}
          >
            {order.name}
          </Link>
        </div>
      </div>
      <div className={styles.ingredients}>
        <div className={styles.images}>
          {orderIngredients
            .slice(0, 5)
            .map(
              (orderIngredient, index) =>
                orderIngredient && (
                  <img
                    src={orderIngredient.image_mobile} className={styles.ingredient} key={index}/>
                )
            )}
        </div>
        <div className={styles.price}>
          <span className="text text_type_digits-default mr-2">
            { totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedItem;