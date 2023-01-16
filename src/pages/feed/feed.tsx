import type { FC } from 'react';
import styles from './feed.module.css';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../utils/types";
import { wsUrl } from '../../utils/consts';
import { wsConnectionStop, wsConnectionStart } from '../../services/ws/ws-actions';
import FeedList from '../feed-list/feed-list';

// import OrderReceipt from '../../components/order-receipt/order-receipt';

const Feed: FC = () => {
    const dispatch = useAppDispatch();
    const {message} = useAppSelector((s) => s.wsReducer)

    const orders = message?.orders

    useEffect(() => {
        dispatch(wsConnectionStart(`${wsUrl}/orders/all`));        
    }, []);
    console.log(orders)

    return (
        <div className={styles.container}>
           {/* <h1 className="text text_type_main-large mb-5 pt-10">Лента заказов</h1> */}
               
            <div className={styles.scroll}>
                <FeedList  />
            </div>
           
            <div className={`pt-25 pb-10`}>
                {/* <OrderStats /> */}
            </div>
        </div>
    );
};

export default Feed;

