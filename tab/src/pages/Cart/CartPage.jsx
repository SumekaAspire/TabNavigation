import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { ToastContainer,toast } from 'react-toastify';

const CartPage = () => {
    const {cart, removeFromCart, clearCart }= useContext(CartContext);

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if( cart.length === 0) return<h2> Your cart is Empty. </h2>

    const handleCheckout=()=>{
        toast.success("Your order will be placed.")
    }

  return (
   <div>
     <h2>Shopping Cart!!</h2>
     <div className='cart-container'>
        {cart.map((item)=> (
        //    <div key={item.id} style={{ marginBottom: "10px" }}>
                <div key={item.id} className='cart-item'>

                {/* <img src={item.image} alt={item.title} width="50" /> */}
                <img src={item.image} alt={item.title}/>
               <span>Item:{item.title}</span>
                <span>{item.quantity}</span>
                <span>Price(₹): {item.price * item.quantity}</span>
                <a onClick={()=> removeFromCart(item.id)}>Remove</a>
                {/* <button onClick={()=> removeFromCart(item.id)}>Remove</button> */}
            </div>
        ))
        }
        {/* <h3 className='totalAmount'>Total:  ₹{totalAmount.toFixed(2)}</h3> */}
      
    </div>
      <h3>Total:  ₹{totalAmount.toFixed(2)}</h3>
        <button onClick={clearCart} style={{marginRight:"12px"}}>Clear Cart</button>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
         <ToastContainer position='top-center' autoClose={3000}/>

   </div>
  )
}

export default CartPage