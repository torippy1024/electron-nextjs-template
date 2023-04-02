import Link from 'next/link';
import {slide as Menu} from 'react-burger-menu';
import {COMMON_INFO} from '../../const';

type BurgerMenuType = {
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
};

const BurgerMenu = ({isOpen, handleClose, className}: BurgerMenuType) => {
  return (
    <Menu isOpen={isOpen} onClose={handleClose} className={`${className}`}>
      <div className='font-bold text-3xl mb-2 border-b'>
        {COMMON_INFO.TITLE}
      </div>
      <Link href='/' className='menu-item'>
        ホームページ
      </Link>
      <Link href='/page2' className='menu-item'>
        ページ2
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
