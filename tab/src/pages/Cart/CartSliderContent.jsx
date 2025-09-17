import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartSliderContent = ({setIsCartOpen}) => {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const navigate =useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cart.length === 0) return <h2> Your cart is Empty. </h2>;

  const handleCheckout = () => {
    // toast.success("Your order will be placed.");
        toast.success("Redirecting to payment...");
        // setIsCartOpen(false);
        navigate("/home/payment");

  };

  return (
    <div>
      <h3>Your Cart Items !</h3>

     <div className="cartSlider-container">
        {cart.map((item) => (
          <div key={item.id} className="cartSlider-item">
            <img src={item.image} alt={item.title} />

            <div className="cartSlider-details">
              <p>{item.title}</p>
              <p className="cartSlider-price">₹ {item.price * item.quantity}</p>
              <div className="cartSlider-RemoveLink">
                <div className="cartSlider-button">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <a onClick={() => removeFromCart(item.id)} className="remove-Btn"> Remove </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div>
        <p style={{ fontWeight: "bold" }}>Total Items - {totalItems}</p>
        <h2 className="total-Amount">Total : ₹{totalAmount.toFixed(2)} </h2>
      </div>

      <button
        onClick={clearCart}
        style={{
          margin: "22px",
          background: " rgba(6, 5, 6, 1)",
          color: "white",
        }}
      >
        Clear Cart
      </button>
      <button
        onClick={handleCheckout}
        style={{ background: "rgba(6, 5, 6, 1", color: "white" }}
      >
        Proceed to Checkout
      </button>
      <ToastContainer position="top-center" autoClose={3000} />
      <br />
      <br />
      <br />
    </div>
  );
};

export default CartSliderContent;
