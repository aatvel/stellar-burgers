import { FC, useEffect } from "react";
import { wsConnectionStart } from "../../services/ws/ws-actions";
import { wsUrl } from "../../utils/consts";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import FeedInfo from "./feed-info/feed-info";
import FeedItem from "./feed-item/feed-item";
import styles from "./feed.module.css";

const FeedList: FC = () => {
  const { message } = useAppSelector((s) => s.wsReducer);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders/all`));
  }, []);
  // console.log(orders);

  return (
    <>
      <h1 className="text text_type_main-large  pt-10 ">Лента заказов</h1>
      <section className={styles.container}>
        {message?.orders ? (
          <div className={styles.scroll}>
            {message.orders.map((order) => (
              <FeedItem key={order._id} order={order} />
            ))}
          </div>
        ) : null}

        <div className={styles.info}>
          <FeedInfo />
        </div>
      </section>
    </>
  );
};

export default FeedList;
