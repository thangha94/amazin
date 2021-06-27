import React from 'react';
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../ContextApi/StateProvider';
import { getBasketTotal } from '../ContextApi/reducer';
import { useHistory } from 'react-router-dom';
const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      />
      <button onClick={(e) => history.push('/payment')}>
        Process to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
