import React from 'react'
import { NumericFormat } from 'react-number-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import "./Subtotal.css"
function Subtotal() {

    const [{basket}]=useStateValue();
  return (
    <div className='subtotal'>
    <p>Subtotal ({basket?.length} items) :<strong> 
    <NumericFormat value={getBasketTotal(basket)} displayType={'text'} thousandSeparator={true} prefix={'₹'} />

    </strong> </p>

    <small>
    <input type="checkbox" /> This order contains a gift
    </small>


   <button className="subtotal__button">
   Proceed to Checkout
   </button>
    </div>
  )
}

export default Subtotal
