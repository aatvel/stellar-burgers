import React, {FC} from "react";
import { useRef } from 'react';
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorStyles from "../burger-constructor.module.css";
import { deleteItem, reoderItem } from "../../../services/constructor-ingredients/constructor-actions";
import { TItem, useAppDispatch } from "../../../utils/types";
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
const dispatch = useAppDispatch();
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

        dispatch(reoderItem(
          {
             from: dragIndex,
             to: hoverIndex
         }
     ));
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
          dispatch(deleteItem(index))
      }
      />
    </li>
  );
};


export default React.memo(MainsAndSauces);
