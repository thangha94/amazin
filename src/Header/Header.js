import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/StateProvider';
const Header = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* <img src={amazonLogo} alt="" className="header__logo" /> */}
      <Link className="header__link" to="/">
        <span className="header__logo"></span>
      </Link>
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
        <Link className="header__link-basket" to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasket />
            <span className="header__option-line-two header__option-basket-count">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
