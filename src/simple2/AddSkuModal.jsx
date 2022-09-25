import { Modal } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';


const AddSkuModal = NiceModal.create(() => {
  const modal = useModal();

  const addSku = () => {
      // post请求，商品数组前面新增商品
      // 刷新商品列表
  }
  return (
    <Modal
      title="title"
      width={700}
      destroyOnClose
      visible={modal.visible}
      onCancel={modal.hide}
      onOk={addSku}
      afterClose={modal.remove}
    ><div>
        sssssss</div></Modal>
  );
});

export const showModal = (props) => {
    NiceModal.show(AddSkuModal, props);
} 
