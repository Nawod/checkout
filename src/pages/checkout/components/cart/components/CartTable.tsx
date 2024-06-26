/**
 * @class CartTable
 * @description : this component is to display products item in a table
 */
import React from 'react'
import './cartTable.scss'
import I01 from '../../../../../assets/image/item.jpg';
import { ProductItem } from '../../../../../shared/models/Product';
import { useDispatch } from 'react-redux';
import { productAction } from '../../../../../store/productSlice';

export interface TableProps{
    itemList : ProductItem[];
}

const CartTable = ({itemList} : TableProps) => {

    const dispatch = useDispatch()

    /**
     * change item count
     * @param id 
     * @param plus 
     */
    const ChangeItemCount = (id:number, plus?:boolean) => {
        if(plus){
            dispatch(productAction.increaseCount(id))
        } else {
            dispatch(productAction.decreaseCount(id))
        }
    }

    /**
     * remove item
     * @param id 
     */
    const RemoveItem = (id : number) => {
        dispatch(productAction.removeItem(id))
    }

  return (
    <div className='table-wrapper'>
        <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
           {itemList.map((item)=>
           <tr key={item.id}>
            <td className='product-col'>
                <div className="img">
                    <img src={I01} alt="" />
                </div>
                <div className="product-data">
                    <div className="product-name">{item.name}</div>
                    <div className="product-code">{item.code}</div>
                </div>
            </td>
            <td className='quantity-col'>
                <div className='q-action'>
                    <div className="minus icon" onClick={()=>ChangeItemCount(item.id,false)}>-</div>
                    <div className="count">{item.count}</div>
                    <div className="plus icon" onClick={()=>ChangeItemCount(item.id,true)}>+</div>
                </div>
            </td>
            <td className='total-col'>
                <div className="price">{item.price * item.count}</div>
            </td>
            <td className='close' onClick={()=>RemoveItem(item.id)}>X</td>
           </tr>)}
        </tbody>
        </table>
    </div>
  )
}

export default CartTable
