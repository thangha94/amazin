import React from 'react';
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/StateProvider';
import { auth } from '../firebase';
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
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
        <Link className="header__link-login" to={!user ? '/login' : './'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option-line-one">{user?.email}</span>
            <span className="header__option-line-two">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
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
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
