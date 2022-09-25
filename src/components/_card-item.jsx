import { useRef } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import { Card } from 'antd';

const ItemTypes = {
  SKU: 'sku',
};

const CardItem = ({ skuData, index, moveCard }) => {
  const ref = useRef(null);

  // 放置的元素
  const [{ handlerId }, drop] = useDrop(() => ({
    accept: ItemTypes.SKU,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
    }),
    hover: (item, monitor) => {
      //   console.log('item', item, monitor);
      if (!ref.current) {
        return;
      }
      console.log('item', item);

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) return;

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  }));

  // 被拖拽的元素
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SKU,
    // 传递给drop区域的数据
    item: () => {
      return { ...skuData, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(drop(ref));
  // return (
  //   <Card
  //     ref={ref}
  //     style={{
  //       boxSizing: 'border-box',
  //       width: 200,
  //       height: 90,
  //       margin: '10px 10px',
  //       opacity: isDragging ? 0 : 1,
  //       backgroundColor: isOver ? 'red' : '#fff',
  //       fontSize: 16,
  //       fontWeight: 'bold',
  //       cursor: 'move',
  //     }}
  //     data-handler-id={handlerId}
  //   >
  //     {skuData.name}
  //   </Card>
  // );
  const opacity = isDragging ? 0 : 1;
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {skuData.name}
    </div>
  );
};

export default CardItem;

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
  width: 400,
};
