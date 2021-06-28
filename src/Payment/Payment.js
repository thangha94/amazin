import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStateValue } from '../ContextApi/StateProvider';
import './Payment.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../ContextApi/reducer';
import axios from '../axios';
const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return function cleanup() {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    //  generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 10 * 10}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    if (mounted && mounted.current) {
      getClientSecret();
    }
  }, [basket]);

  const handleSubmit = async (e) => {
    //   do all the fancy stripe stuff...
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //   PaymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace('/orders');
        dispatch({
          type: 'EMPTY_BASKET',
        });
      });
  };

  const handleChange = (e) => {
    //   Listen for changes in the CardElement
    // and display any errors as the customer types theirs card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>District 3</p>
            <p>HCMC</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}
            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__price-container">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Subtotal ({basket.length} items):
                      {value}
                    </h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'£'}
                />
                {processing}
                {disabled}
                {succeeded}
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
