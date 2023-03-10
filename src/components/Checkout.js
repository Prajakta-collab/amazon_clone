import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{basket}]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
     
    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout_ad" className="checkout__ad" />
    
      {
        basket?.length===0 ?(
            <div>
            <h2 className="chekout__title">Your Shopping Basket is Empty</h2>

            <p>
            You have no items in your basket. To buy one or
            "Add to basket" next to the iten.
            </p>
            </div>


        ):(
            <div>

            <h2 className="chekout__title">
            Your Shopping Basket
            </h2>

            {basket?.map((item)=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                />
        ))}
            </div>
        )
      }

      </div>
    {basket?.length>0 &&(
    <div className="checkout__right">
    <Subtotal/>
    </div>
    )}
      </div>
  )
}
 
export default Checkout
