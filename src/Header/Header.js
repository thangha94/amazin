import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
const Header = () => {
  return (
    <div className="header">
      {/* <img src={amazonLogo} alt="" className="header__logo" /> */}
      <span className="header__logo"></span>
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-one">Hello Guest</span>
          <span className="header__option-line-two">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Return</span>
          <span className="header__option-line-two">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-one">Your</span>
          <span className="header__option-line-two">Prime</span>
        </div>
        <div className="header__option-basket">
          <ShoppingBasket />
          <span className="header__option-line-two header__option-basket-count">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
