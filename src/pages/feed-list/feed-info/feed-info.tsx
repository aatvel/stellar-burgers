import type { FC } from "react";
import styles from "./feed-info.module.css";

import { IWSMessage, StatusCodes, useAppSelector } from "../../../utils/types";

const FeedInfo: FC = () => {
  const { message } = useAppSelector((s) => s.wsReducer);

  const doneOrders = message?.orders.filter(({ status }) => status === StatusCodes.done)
    .map(({ number }) => number)
    .slice(0, 10) || [];

  const pendingOrders = message?.orders.filter(({ status }) => status === StatusCodes.pending)
    .map(({ number }) => number)
    .slice(0, 10) || []

  return (
    <div className={`${styles.container}`}>
      <section >
        <div className="text text_type_main-medium mb-6">Готовы:</div>
        <div className={styles.done_list}>
          {doneOrders.map((number) => (
            <div
              key={number}
              className="text text_type_digits-default text_color_success"
            >
              {number}
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text text_type_main-medium mb-6">В работе:</h2>

        {pendingOrders.map((number) => (
          <div key={number} className="text text_type_digits-default">
            {number}
          </div>
        ))}
      </section>
      {message?.total && (
        <div className={`${styles.orders_total}`}>
          <h2 className="text text_type_main-medium">
            Выполнено за все время:
          </h2>
          <div
            className={`${styles.order_numbers} text text_type_digits-large`}>
            {message.total}
          </div>
        </div>
      )}
      {message?.totalToday && (
        <div className={`${styles.orders_total}`}>
          <div className="text text_type_main-medium">
            Выполнено за сегодня:
          </div>
          <div
            className={`${styles.order_numbers} text text_type_digits-large`}>
            {message.totalToday}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedInfo;
