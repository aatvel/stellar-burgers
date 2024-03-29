import React, { useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";
import { showPageDetailStart } from "../../services/ingredients/ingredients-actions";
import { PreLoader } from "../app/preloader";
import { TItem, useAppDispatch, useAppSelector } from "../../utils/types";

export interface IBackground {
  background: object | null;
}

const IngredientDetails: FC<IBackground> = ({ background }) => {
  const dispatch = useAppDispatch();

  const { ingredient } = useAppSelector((s) => s.details);
  const { pageIngredient, loading } = useAppSelector<{pageIngredient: Array<TItem>; loading: string}>((s) => s.ingredients);
  const { _id } = useParams();

  useEffect(() => {
    if (!background) {
      dispatch(showPageDetailStart(_id));
    }
  }, []);

  return loading ? (
    <PreLoader />
  ) : (
    <div className={styles.card}>
      <img
        className={`${styles.image} mt-3 `}
        alt={background ? ingredient?.name : pageIngredient[0]?.name}
        src={
          background ? ingredient?.image_large : pageIngredient[0]?.image_large
        }
      />
      <h3 className="text text_type_main-medium mt-4 ">
        {background ? ingredient?.name : pageIngredient[0]?.name}
      </h3>
      <ul className={`mt-8 ${styles.values}`}>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {background ? ingredient?.calories : pageIngredient[0]?.calories}
          </p>
        </li>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {background ? ingredient?.proteins : pageIngredient[0]?.proteins}
          </p>
        </li>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {background ? ingredient?.fat : pageIngredient[0]?.fat}
          </p>
        </li>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {background
              ? ingredient?.carbohydrates
              : pageIngredient[0]?.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
