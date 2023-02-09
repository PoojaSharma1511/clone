import { useDispatch } from 'react-redux'
import {remove,plus} from '../store/cartSlice'

function CartItem({product}) {
  
    const {image , price , id , title, count} = product
  
    const dispatch = useDispatch()

    const handleDelete = (id)=> {
        dispatch(remove(id))
    }

    return (
    <div className="cart-item">
    <img src={image} alt="" />
    <span>
      <h1>{title}</h1>
      <h3>Rate : {price}$</h3>
      <h3>Qty : 1</h3>
    </span>
    <div><span>
            
            <button className='QTYBTN' colorScheme='gray'size='xs' onClick={()=>dispatch(plus({
            ...product,
            count: count+1
           }))} >+</button>
           </span><span>{count}</span>
           <span>
            <button colorScheme='gray' size='xs'
           onClick={()=>{
            if(count > 1)dispatch(plus({
               ...product,
               count: count-1
              }))
           }}
            >-</button>
            </span></div>
    <button className="remove-btn" onClick={()=>handleDelete(id)}>
      Remove Item
    </button>
  </div>
  )
}

export default CartItem