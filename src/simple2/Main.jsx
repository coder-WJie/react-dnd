import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import NiceModal from '@ebay/nice-modal-react';

import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import Header from './_header';
// import Container from './_container';
// import Container from '../simple/index';
import Container from './index';
import { showModal as ShowAddSkuModal } from './AddSkuModal';
import Style from './style.module.css';

// 拖拽上下文
// 请求商品列表
const Main = () => {
  const [skuList, setSkuList] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Spam in Twitter  is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
    {
      id: 8,
      text: 'wangjie',
    },
    {
      id: 9,
      text: 'hangg',
    },
    {
      id: 10,
      text: 'sunjian',
    },
    {
      id: 11,
      text: 'jiushiwo',
    },
    {
      id: 12,
      text: 'www',
    },
    {
      id: 13,
      text: 'xxxxx',
    },

    {
      id: 14,
      text: 'bbbbbb',
    },
    {
      id: 15,
      text: 'cccccc',
    },
    {
      id: 16,
      text: 'ddddddd',
    },
    {
      id: 17,
      text: 'eeeee',
    },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setSkuList((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const showAddSkuModal = () => {
    ShowAddSkuModal({});
  };

  return (
    <NiceModal.Provider>
      {' '}
      <div className={Style.main}>
        {/*新增商品*/}
        <Header showAddSkuModal={showAddSkuModal} />
        {/*渲染商品列表*/}
        <DndProvider backend={HTML5Backend}>
          <Container skuList={skuList} moveCard={moveCard} />
        </DndProvider>
      </div>
    </NiceModal.Provider>
  );
};

export default Main;
