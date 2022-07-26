import { FC, useState } from 'react';

import logo from '../../assets/shared/logo.svg';
import { Navigation } from '../ui/Navigation';

interface Props {
  className: string;
  children?: React.ReactNode | undefined;
}

export const MainLayout: FC<Props> = ({ children, className }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setIsMenuVisible((state) => !state);
  };

  return (
    <div className={`mainLayout ${className}`}>
      <header className='header flex'>
        <div>
          <img src={logo} alt='space tourism logo' className='header__logo' />
        </div>
        <button
          onClick={handleMenuClick}
          className={`mobile-nav-toggle ${
            isMenuVisible ? 'mobile-nav-toggle__close' : ''
          }`}
          aria-controls='primary-navigation'
        >
          <span className='sr-only'>Menu</span>
        </button>
        <Navigation
          className={
            isMenuVisible
              ? 'primary-navigation__expanded'
              : 'primary-navigation__hidden'
          }
        />
      </header>
      {children}
    </div>
  );
};
