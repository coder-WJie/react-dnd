import update from 'immutability-helper';
import { useCallback, useState } from 'react';

import { SkuCard } from './Card.jsx';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  backgroundColor: 'grey',
};

const Container = ({skuList, moveCard}) => {
 

  const renderCard = useCallback((sku, index) => {
    return (
      <SkuCard
        key={sku.id}
        index={index}
        skuData={sku}
        moveCard={moveCard}
      />
    );
  }, []);

  return (
    <>
      <div style={style}>{skuList.map((card, i) => renderCard(card, i))}</div>
    </>
  );
};

export default Container;
