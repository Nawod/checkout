/**
 * @class Cart
 * @description : this component is to display cart section
 */
import React, { useEffect, useState } from 'react'
import './cart.scss'
import CartTable from './components'
import { useSelector } from 'react-redux'
import { ProductItem } from '../../../../shared/models/Product'

const Cart = () => {

  const [total, setTotal] = useState(0)
  const { productList } = useSelector( ( state : any ) => state.productStates );

  /**
   * update total price
   */
  const UpdateTotal = () => {
    let tempTotal = 0;
    productList.forEach((item:ProductItem) => {
      tempTotal += (item.count * item.price);
    });
    setTotal(tempTotal);
  }

  useEffect(()=>{
    UpdateTotal();
  },[productList])


  return (
    <div className='cart-wrapper'>
      <div className="cart-header">
        <div className="title">Cart</div>
        <div className="item-count">{productList.length || 0} items</div>
      </div>
      <div className="cart-table-wrapper">
        <CartTable itemList = {productList}/>
      </div>
      <div className="option-row">

      </div>
      <div className="total-row">
        <div className="navigation">{'< Continue Shopping'}</div>
        <div className="total">Total: ${total}</div>
      </div>
    </div>
  )
}

export default Cart
