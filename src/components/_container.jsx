/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import Style from './style.module.css';
import CardItem from './_card-item';

import update from 'immutability-helper';

const Container = () => {
  // eslint-disable-next-line no-unused-vars
  const [skuList, setSkuList] = useState([
    { id: 1, name: 'aaaaaaa' },
    { id: 2, name: 'bbbbbb' },
    { id: 3, name: 'ccccccc' },
    { id: 4, name: 'ddddddd' },
    { id: 5, name: 'eeeeee' },
    { id: 6, name: 'ffffff' },
    { id: 7, name: 'ggggg' },
    { id: 8, name: 'hhhhhh' },
    { id: 9, name: 'iiiiii' },
    { id: 10, name: 'jjjjjj' },
    { id: 11, name: 'kkkkkk' },
    { id: 12, name: 'xxxxxxx' },
    { id: 13, name: 'wwwwwww' },
    { id: 14, name: 'qqqqq' },
    { id: 15, name: 'yyyyyyyy' },
    { id: 16, name: 'ppppppp' },
    { id: 17, name: 'lllllllll' },
    { id: 18, name: ',mmmmmmmm' },
    { id: 19, name: 'ooooooo' },
    { id: 20, name: '商品20' },
    { id: 21, name: '商品21' },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    // 默认的排序方式

    setSkuList((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderSkuCard = useCallback((sku, index) => {
    return (
      <CardItem skuData={sku} index={index} moveCard={moveCard} key={sku.id} />
    );
  }, []);

  return (
    <div className={Style.container}>
      {skuList.map((sku, index) => renderSkuCard(sku, index))}
    </div>
  );
};

export default Container;
