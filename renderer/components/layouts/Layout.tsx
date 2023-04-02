import {ReactNode} from 'react';
import {COMMON_INFO} from '../../const';
import Footer from './Footer';
import Header from './Header';

type LayoutType = {
  children: ReactNode;
};

const Layout = ({children}: LayoutType) => {
  return (
    <div
      data-theme={COMMON_INFO.DAISYUI_THEME}
      className='flex flex-col min-h-screen'
    >
      <Header />
      <div className='grow container mx-auto my-4 px-4 max-w-3xl'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
