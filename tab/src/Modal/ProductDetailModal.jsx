import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../css/ProductDetail.css"

const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) return null; // don't render if no product is selected

  return (
    <div
     className="modal-overlay" 
     onClick={onClose} // close when clicking outside
    >
      {/* Modal Card */}
      <div 
      className="modal-card"
      onClick={(e) => e.stopPropagation()} // prevent closing on card click
    >
        {/* Close button */}
        <button onClick={onClose} className="close-btn" >
          ✕
        </button>

        {/* Product details */}
        <img
          src={product.image || product.thumbnail || product.images}
          alt={product.title}
          style={{ maxWidth: "150px", marginBottom: "10px" }}
        />
        <h3>{product.title}</h3>
        <p>
          <strong>₹{product.price}</strong>
        </p>
        <p><b>Description: </b> {product.description} </p>
        <p>-------------------------------------------------</p>
        {product.rating && (
          <div>
            <p> <b>Ratings:</b><FaStar color="gold"/> {product.rating.rate || product.rating} / 5 </p>
            <p><b>{product.rating.count}</b> customers already bought this product</p>
          </div>
        )}

        <button
          onClick={() => {
            addToCart(product);
            // onClose();
          }}
          className="add-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
