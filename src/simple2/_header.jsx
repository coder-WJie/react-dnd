import { Button } from 'antd';
import Style from './style.module.css';
const Header = ({ showAddSkuModal }) => {
  return (
    <div className={Style.header}>
      <Button type="primary" onClick={showAddSkuModal}>
        新增商品
      </Button>
    </div>
  );
};

export default Header;
