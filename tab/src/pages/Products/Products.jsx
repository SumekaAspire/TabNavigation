import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import "../../css/HomePage.css";
import { CartContext } from '../../context/CartContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError("Something went wrong while fetching products.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;

  return (
    <div>
      <h2>All Products</h2>
      <div className="product-alignment">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            {/* strong - screen readers and seo friendly */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br /><br />
    </div>
  );
};

export default Products;