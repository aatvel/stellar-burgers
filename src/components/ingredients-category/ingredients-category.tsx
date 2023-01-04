import React, {FC} from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Ingredient from "../burger-ingredients/ingredient/ingredient";
import categoryStyles from "./ingredients-category.module.css";
import { Link, useLocation } from "react-router-dom";
import { TItem } from "../../utils/types";

interface ICategory{
  title: string;
  titleId: string;
  ingredients:string
}

const IngredientCategory: FC<ICategory> = ({ title, titleId, ingredients }) => {
  const { data } = useSelector((state: any) => state.ingredients);
  const orderedMains = data && data.filter((item: TItem) => item.type === ingredients);

  return (
    <div>
      <h3 className="text text_type_main-medium" id={titleId}>
        {title}
      </h3>
      <section className={categoryStyles.items}>
        {orderedMains.map((ingredient:TItem) => (
          <Ingredient ingredientData={ingredient} key={ingredient._id} />
        ))}
      </section>
    </div>
  );
};

export { IngredientCategory };
