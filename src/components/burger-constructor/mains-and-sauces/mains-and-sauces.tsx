import React, {FC} from "react";
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "../burger-constructor.module.css";
import { CONSTRUCTOR_REORDER, CONSTRUCTOR_DELETE } from "../../../services/constructor-ingredients/constructor-actions";
import PropTypes from "prop-types";
import { TItem } from "../../../utils/types";
import type { Identifier } from 'dnd-core'


interface IMains{
  ingredient: TItem;
  index: number
}

interface DragObject {
  index: number
}

interface CollectedProps {
  handlerId: Identifier | null;
}

const MainsAndSauces:FC <IMains> = ({ ingredient, index }) => {
const dispatch = useDispatch();
const ref = useRef<HTMLLIElement>(null);

const [{handlerId}, drop] = useDrop<DragObject, undefined, CollectedProps>({
    accept: ["SORT_INGREDIENT"],
    collect(monitor) {
        return {
            handlerId: monitor.getHandlerId()
        }
    },
    hover(item, monitor) {
      if (!ref.current){
        return
      }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
            return;
        }
        const hoverBoundRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundRect.bottom - hoverBoundRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset!.y - hoverBoundRect.top;
        if ( dragIndex < hoverIndex && hoverClientY < hoverMiddleY){
            return
        }

        dispatch({
            type: CONSTRUCTOR_REORDER,
            payload: {
                from: dragIndex,
                to: hoverIndex
            }
        });
        item.index = hoverIndex;
    }
    
})


  const [{isDragging}, drag] = useDrag({
    type: "SORT_INGREDIENT",
    item: () => {return { ingredient, index }},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref))

  return (
    <li
      ref={ref}
      className={BurgerConstructorStyles.item}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
        handleClose={() =>
            dispatch({
                type: CONSTRUCTOR_DELETE,
                payload: index,
            })
        }
      />
    </li>
  );
};


export default React.memo(MainsAndSauces);
