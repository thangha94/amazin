import React from 'react';
import './Footer.scss';
const Footer = () => {
  return (
    <div className="footer">
      <a href="#slider-container" className="footer__back-to-top">
        Back to top
      </a>
      <div className="footer__nav">
        <div className="footer__nav-container">
          <h3>Get to Know Us</h3>
          <ul className="footer__nav-list">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
        </div>
        <div className="footer__nav-container">
          <h3>Make money with Us</h3>
          <ul className="footer__nav-list">
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer__nav-container">
          <h3>Amazon Payment product</h3>
          <ul className="footer__nav-list">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__nav-container">
          <ul className="footer__nav-list">
            <h3>Let Us help you</h3>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
