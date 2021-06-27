import React from 'react';
import './Checkout.scss';
import CheckoutImg from '../images/checkout_ad.jpg';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../ContextApi/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Title } from '@material-ui/icons';
const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img src={CheckoutImg} className="checkout__ad" alt="" /> */}
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
