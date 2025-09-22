import React, { useContext, useState,useCallback } from "react";
import useFetch from "../CustomHooks/useFetch";
import WishlistIcon from "../Wishlist/WishlistIcon";
import ProductModal from "../../Modal/ProductDetailModal";
import { useCart } from "../../context/CartContext";

const Jewellery = () => {
  const [products, loading, error] = useFetch({
    url: "https://dummyjson.com/products",
  });
  // const {addToCart} = useContext(CartContext); //instead of this use custom hook
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

//to open selcted product modal
const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleAddToCart = useCallback((e, product) => {
    e.stopPropagation();// prevent open modal
    addToCart(product);
  }, [addToCart]);

  if (loading) return <h3>Loading</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
      <h2>Jewellery</h2>
      <div className="product-alignment">
        {products.products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleSelectProduct(product)} // open modal
            style={{ cursor: "pointer" }}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <WishlistIcon product={product} />
            </div>

            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>
              <strong>₹{product.price}</strong>
            </p>
            <button
              onClick={(e) => handleAddToCart(e, product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* ProductDetailModal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Jewellery;
