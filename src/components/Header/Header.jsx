import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import useMatchMedia from 'hooks/useMatchMedia';
import { useSelector } from 'react-redux';
import burger from '../../assets/icons/burger.svg';
import close from '../../assets/icons/icon-close.svg';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import useScrollLock from 'hooks/useScrollLock';
import AuthNav from './AuthNav/AuthNav';
import Logo from './Logo';
import Nav from './Nav';
import UserNav from './UserNav';

import {
  HeaderStyled,
  BurgerMenu,
  MobMenuButton,
  ModalWrapper,
  Wrap,
} from './Header.styled';

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
   const isLogin = useSelector(selectIsLoggedIn);
  const { isDesktop, isTablet, isMobile } = useMatchMedia();
  // const { pathname } = useLocation();
  const { lockScroll, UnlockScroll } = useScrollLock();

  const toggleMenu = () => {
    if (mobileMenuIsOpen) return closeMobMenu();
    setMobileMenuIsOpen(true);
    lockScroll();
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
    UnlockScroll();
  };

  return (
    <>
      <HeaderStyled>
        {isLogin ? (
          <>
            <Wrap>
              <Logo closeMobMenu={closeMobMenu} />
              {isTablet && !mobileMenuIsOpen && <UserNav />}
              {isDesktop ? (
                <>
                  <Nav />
                  <UserNav />
                </>
              ) : (
                <>
                  <MobMenuButton
                    type="button"
                    aria-label="burger-menu"
                    onClick={toggleMenu}
                  >
                    <BurgerMenu
                      src={burger}
                      alt="burger-menu-icon"
                      width={30}
                      height={20}
                    />
                  </MobMenuButton>
                </>
              )}
            </Wrap>
            {!isDesktop && mobileMenuIsOpen && (
              <ModalWrapper>
                {isMobile && <UserNav closeMobMenu={closeMobMenu} />}
                <Nav closeMobMenu={closeMobMenu} />
              </ModalWrapper>
            )}
          </>
        ) : (
          <>
            <Wrap>
              <Logo closeMobMenu={closeMobMenu} />
              {isTablet && !mobileMenuIsOpen && (
                <>
                  <AuthNav />
                </>
              )}
              {isDesktop && (
                <>
                  <Nav />
                  <AuthNav />
                </>
              )}
              {!isDesktop && (
                <MobMenuButton
                  type="button"
                  aria-label="burger-menu"
                  onClick={toggleMenu}
                >
                  <BurgerMenu
                    src={mobileMenuIsOpen ? close : burger}
                    alt="burger-menu-icon"
                    width={30}
                    height={20}
                  />
                </MobMenuButton>
              )}
            </Wrap>

            {!isDesktop && mobileMenuIsOpen && (
              <ModalWrapper>
                {isMobile && <AuthNav closeMobMenu={closeMobMenu} />}
                <Nav closeMobMenu={closeMobMenu} />
              </ModalWrapper>
            )}
          </>
        )}
      </HeaderStyled>
    </>
  );
}

export default Header;
