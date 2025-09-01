import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useFetch from './CustomHooks/useFetch';
import { CartContext } from '../context/CartContext';
import ProductsPagination from '../Pagination/ProductsPagination';

const NewLaunch = () =>{
const { addToCart } = useContext(CartContext);


  const[product,loading, error] = useFetch({url: "https://dummyjson.com/products"})
  const [electronics, loadingElectronics, errorElectronics] = useFetch({url: "https://fakestoreapi.com/products/category/electronics?limit=6",});
  const [jewelery, loadingJewelery, errorJewelery] = useFetch({url: "https://fakestoreapi.com/products/category/jewelery?limit=4",});


  if(loading || loadingElectronics ||loadingJewelery) return <h3>Loading</h3>
  if(error || errorElectronics || errorJewelery) return <h3 style={{color:"red",}}>{error || errorElectronics || errorJewelery}</h3>


  const settings = {
    dots: true,               
    infinite: true,           // loop slides
    speed: 500,               // transition speed
    slidesToShow: 1,          // at a time
    slidesToScroll: 1,        
    autoplay: true,          
    autoplaySpeed: 3000,      
    arrows: false,              // show prev/next arrows
  };

  const images = [
    "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/401",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",

  ];

  return (
   <div>
    <h2>Newly Launched</h2> <br/>

    <div className='cart-container'>
      <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{ width: "100vh", borderRadius: "0px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      
    </div>
   </div>



    
    <h2>Newly Launched Products</h2>
     <div>
      <h2>Electronics</h2>
     <div className="product-alignment">
        {electronics.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br /><br />
      <h2>Jewellery</h2>
<div className="product-alignment">
        {jewelery.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br /><br />

      {/* <h2>Items</h2>
      <div className="product-alignment">
        {product.products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br /><br /> */}

      <h2>Items</h2>
      <ProductsPagination items={product.products} itemsPerPage={8} addToCart={addToCart}/>

     </div>


   </div>
  );
};



export default NewLaunch

const sliderWrapper = {
  width: "100vw",          // full width of the viewport
  margin: "0 auto",
  padding: "0px",
  overflow: "hidden",      // prevent horizontal scroll
};

const imageStyle = {
  width: "100%",           
  height: "400px",         
  objectFit: "cover",
  borderRadius: "0px"
};