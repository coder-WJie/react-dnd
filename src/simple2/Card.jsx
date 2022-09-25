import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Card } from 'antd';

import { ItemTypes } from './ItemTypes.js';

export const SkuCard = ({ skuData, index, moveCard }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      console.log(
        'monitor',
        monitor.getInitialClientOffset(),
        hoverBoundingRect
      );

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { ...skuData, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  // return (
  // 	<div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
  // 		{skuData.text}
  // 	</div>
  // )

  return (
    <Card ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {skuData.text}
    </Card>
  );
};

const style = {
    display: 'inline-block',
//   display: 'flex',
  width: 150,
  height: 150,
//   border: '1px dashed gray',
  //   padding: '0.5rem 1rem',
  margin: '.5rem',
//   backgroundColor: 'white',
  cursor: 'move',
};
