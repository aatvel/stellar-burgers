import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "../burger-constructor.module.css";

const MainsAndSauces = ({ ingredient, index }) => {
  // useDrag - the list item is draggable
  const [, dragRef] = useDrag({
    type: "item",
    item: { ingredient, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li ref={dragRef} key={index} className={BurgerConstructorStyles.item}>
            
      <DragIcon type="primary" />
            
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
      />
          
    </li>
  );
};

export default React.memo(MainsAndSauces);
