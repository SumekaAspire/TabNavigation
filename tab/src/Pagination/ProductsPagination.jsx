import React,{useState} from 'react'
import WishlistIcon from '../pages/Wishlist/WishlistIcon';

const ProductsPagination = ({items,itemsPerPage, addToCart}) => {
    const[currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    //slice items for current page
    const startIndex = (currentPage -1) *itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
        <div className="product-alignment">
        {currentItems.map((product) => (
          <div key={product.id} className="product-card">
            <WishlistIcon product={product}/>
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p><strong>₹{product.price}</strong></p> 
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <br />

      {/* Pagination Buttons */}

     <div style={{ marginTop:"20px", textAlign:"center" }}>
        <button disabled={currentPage === 1} onClick={()=>setCurrentPage((prev) => prev - 1)}>
            Prev
        </button>
        <span style={{margin:"0 10px"}}>
            Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={()=> setCurrentPage((prev) => prev + 1)}>
            Next
        </button>
     </div>
     </div>
  )
}

export default ProductsPagination