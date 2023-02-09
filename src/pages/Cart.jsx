import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  
  const cart = useSelector(state => state.cart)
  const totalPrice = cart.reduce((p,c)=>{
    return p + c.price
  },0)
  
  return (
    <div className="cart-container">
      <div className="cart-items">
     {
      cart.map(product =>  <CartItem key={product.id} product={product}/>)
     }
      </div>
      <div className="bill-section">
        <h1>Total Items : {cart.length} </h1>
        <h1>Total Amount : {totalPrice}</h1>
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
}

export default Cart;
