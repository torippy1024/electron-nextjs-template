import Head from 'next/head';
import {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {COMMON_INFO} from '../../const';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <div>
      <Head>
        <title>{COMMON_INFO.TITLE}</title>
        <meta name='description' content={COMMON_INFO.DESCRIPTION} />
        <link rel='icon' href={COMMON_INFO.ICON_URL} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <BurgerMenu isOpen={openMenu} handleClose={toggleMenu} />
      <div className='navbar bg-base-200'>
        <button onClick={toggleMenu} className='btn btn-ghost p-1'>
          <AiOutlineMenu />
        </button>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl p-1'>
            {COMMON_INFO.TITLE}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
