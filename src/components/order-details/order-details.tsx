import stylesOrderDetails from "./order-details.module.css";
import tickImg from "../../images/tick.png";
import { useSelector } from "react-redux";

const OrderDetails = () => {

  const { order } = useSelector((state: any) => state.orderReducer);

  return (
    <div className={`${stylesOrderDetails.content} pt-9`}>
      <h2 className={`${stylesOrderDetails.title} text text_type_digits-large`}>
      {order}
      </h2>
      <p className={`text text_type_main-medium mt-8`}>идентификатор заказа</p>
      <img className={`${stylesOrderDetails.image} mt-15`} src={tickImg} />
      <div className={`${stylesOrderDetails.details} mt-15`}>
        <p className={`text text_type_main-default`}>
          Ваш заказ начали готовить!
        </p>
        <p className={`text text_type_main-default mt-2`}>
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
