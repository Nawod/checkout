/**
 * @class Checkout
 * @description : this component is to render the checkout page of the app
 */
import React from 'react'
import './checkout.scss'
import Cart from './components/cart'
import Payment from './components/payment'

const Checkout = () => {
  return (
    <div className='checkout-wrapper'>
      <div className="cart-section">
        <Cart />
      </div>
      <div className="payment-section">
        <Payment />
      </div>
    </div>
  )
}

export default Checkout
