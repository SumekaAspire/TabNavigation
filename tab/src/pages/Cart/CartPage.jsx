import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ToastContainer,toast } from 'react-toastify';

const CartPage = () => {
    const {cart, removeFromCart, clearCart, increaseQty, decreaseQty}= useContext(CartContext);

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    if( cart.length === 0) return<h2> Your cart is Empty. </h2>

    const handleCheckout=()=>{
        toast.success("Your order will be placed.")
    }

  return (
   <div>
     <h2>Shopping Cart -  Items Added !</h2>
     <div className='cart-container'>
        {cart.map((item)=> (
           <div key={item.id} className='cart-item'>
               <img src={item.image} alt={item.title}/>
               <p>{item.title}</p><br/>
               <p style={{fontWeight:'bold'}}>(₹) : {item.price * item.quantity}</p>
               
                <div className='cart-quantity'>
                    <button 
                      className="cart-incre-decre-btn"
                      onClick={()=> decreaseQty(item.id)}
                      >-</button>
                    <span>{item.quantity}</span>
                    {/* p - block element(quantity is not visible because of block level), span - inline element */}
                    <button 
                      className="cart-incre-decre-btn"
                      onClick={()=> increaseQty(item.id)}
                      >+</button>
                </div>   
                <a onClick={()=> removeFromCart(item.id)}>Remove</a>
                {/* <button onClick={()=> removeFromCart(item.id)}>Remove</button> */}
            </div>
        ))
        }
    </div>
          <br/>
        <h3>Total Items  -  {totalItems} </h3>
        <h3 className='total-Amount'>Total :  {totalAmount.toFixed(2)} ₹</h3>
          <br/> 
        <button onClick={clearCart} style={{marginRight:"12px"}}>Clear Cart</button>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
         <ToastContainer position='top-center' autoClose={3000}/><br/><br/><br/>

   </div>
  )
}

export default CartPage