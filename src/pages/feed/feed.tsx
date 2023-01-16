import type { FC } from "react";
import styles from "./feed.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { wsUrl } from "../../utils/consts";
import {
  wsConnectionStop,
  wsConnectionStart,
} from "../../services/ws/ws-actions";
import FeedList from "../feed-list/feed-list";



const Feed: FC = () => {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector((s) => s.wsReducer);

  const orders = message?.orders;

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders/all`));
  }, []);
  console.log(orders);

  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <FeedList />
      </div>
    </div>
  );
};

export default Feed;
