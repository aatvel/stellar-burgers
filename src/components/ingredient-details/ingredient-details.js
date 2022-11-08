import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={styles.card}>
      <img
        className={`${styles.image} mt-3 `}
        alt={ingredient.name}
        src={ingredient.image_large}
      />
      <h3 className="text text_type_main-medium mt-4 ">{ingredient.name}</h3>
      <ul className={`mt-8 ${styles.values}`}>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </p>
        </li>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </p>
        </li>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </p>
        </li>
        <li className={styles.value}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientType.isRequired,
};

export default IngredientDetails;
