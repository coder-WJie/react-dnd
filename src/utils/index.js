// 拖动排序函数
export const sortByDrag = (skuList, dragIndex, hoverIndex) => {
  console.log('init---skuList', skuList);
  let newSkuList = [...skuList];
  console.log('--init--', newSkuList);
  // const dragItem = skuList[dragIndex];
  // const hoverItem = skuList[hoverIndex];
  // console.log('dragItem hoverItem', dragIndex, dragItem, hoverIndex, hoverItem);
  if (dragIndex > hoverIndex) {
    // hoverIndex - dragIndex 之间的元素后移一位
    for (let i = dragIndex; i > hoverIndex; i--) {
      newSkuList[i] = newSkuList[i - 1];
    }
  } else if (dragIndex < hoverIndex) {
    // dragIndex - hoverIndex 之间的元素前移一位
    for (let i = dragIndex; i < hoverIndex; i++) {
      newSkuList[i] = newSkuList[i + 1];
    }
  }
  newSkuList[hoverIndex] = skuList[dragIndex];
  console.log('over---newSkuList', newSkuList);

  return newSkuList;
};
