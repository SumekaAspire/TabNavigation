
import "../App.css";
import React, {useState,useContext, useEffect } from 'react';
import {NavLink, Outlet, Link} from "react-router-dom";
import "../css/HomePage.css";
import Footer from "./Footer";
import LogoutButton from "./LogoutButton";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import CartSliderContent from "../pages/Cart/CartSliderContent";
import { FaAngleDown } from "react-icons/fa"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TopBannerSlider from "./TopBannerSlider";
import logo from"../assets/logo.png"
import { FaHeart, FaRegHeart } from "react-icons/fa"; 
import { WishlistContext } from "../context/WishlistContext";


function Home() {

  const {wishlist} = useContext(WishlistContext);
  const{cart} = useContext(CartContext);
  const totalItems = cart.reduce((acc, item)=> acc +  item.quantity, 0)

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000);

    return ()=> clearInterval(timer);
  },[]);


 return (
<div className="tab-content">
   <div className="top-offerBanner">
      <TopBannerSlider/>
    </div>  
 
        
   <nav className="tab-nav">

     {/* <div className="nav-header">SHOPPIFY</div> */}
    
      <div className="tab-nav-links">
        <div className="tab-logo">
            <Link to="/home/products" className="nav-header">
                <div className="nav-logo">
                   <img src={logo} alt="MyApp Logo" className="logo-img" />
                </div>
                <h3 style={{fontFamily:"serif"}}>SHOPPIFY</h3>
            </Link>

        </div>

       <div className="tab-left">                                  
        <NavLink to="/home/about" className="tab-link">About</NavLink>
        <NavLink to="/home/newlaunch" className="tab-link">NewLaunch</NavLink>
        <NavLink to="/home/profile" className="tab-link">Profile</NavLink>
        {/* <NavLink to="/home/products" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Products</NavLink> */}
        
       

        <div className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>
          <NavLink to="/home/products" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"} style={{ display: "flex", alignItems: "center", gap: "5px" }}>Products
                <FaAngleDown size={18} />
          </NavLink>     

              {isDropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to="/home/newlaunch" className="tab-link">NewLaunch</NavLink>
                  <NavLink to="/home/jewellery" className="tab-link">Jewellery</NavLink>
                  <NavLink to="/home/clothing" className="tab-link">Clothing</NavLink>
                  <NavLink to="/home/books" className="tab-link">Books</NavLink>
                  <NavLink to="/home/electronics" className="tab-link">Electronics</NavLink>

                </div>
              )}
           </div>

        
        
        <NavLink to="/home/contacts" className="tab-link">Contacts</NavLink> 
        <NavLink to="/home/test" className="tab-link">Test</NavLink>
        <NavLink to="/home/cart" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Cart
        {totalItems >0 &&( <span 
            style={{
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "3px 5px",
            fontSize: "12px",
            margin:"4px",
            
           }}>
             {totalItems}
            </span>
            )}
        </NavLink>
       </div>


       <div className="tab-right">

        <div style={{color:"#fff",fontSize:"15px", fontWeight:"500", marginBottom:"5px"}}> 
          {currentTime.toLocaleTimeString()}
        </div>

         <NavLink to="/home/wishlist" style={{color:"black"}}> 
          <FaRegHeart size={19} />
          {wishlist.length > 0 && (
          <span
            style={{
                    padding: "0.7px 5px",
                    margin: "4px",
                    position: "absolute",
                    right: "7rem",
                    bottom:"1.3rem",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "12px",
                    fontWeight:"bold", 
                    marginRight:"3.1rem",   
                    
            }}
          >
            {wishlist.length}
          </span>
        )}
      </NavLink>
       


        <div onClick={()=> setIsCartOpen(true)} style={{cursor:"pointer"}}> 
          <FaShoppingCart size={20}/>
          {totalItems >0 &&(
            <span style={{
                    position: "absolute",
                    right: "3.7rem",
                    bottom:"1.5rem",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "1px 5.3px",
                    fontSize: "12px",
                    fontWeight:"bold", 
                    marginRight:"3.1rem",          
                  }}>
                    {totalItems}
             </span>
          )}
        </div>
        <LogoutButton/>
       </div>
      </div>
     </nav>

      <div className="main-content"> <Outlet/>  </div>
      <Footer/>
      
      {isCartOpen && (
       <div
      onClick={() => setIsCartOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(172, 157, 157, 0.4)",
            zIndex: 999,
          }}
       />
      )}

      {/*Cart Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "25%",
          background: "#fdfbfdff",
          boxShadow: "-2px 0 8px rgba(0,0,0,0.3)",
          transform: isCartOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
          paddingTop: "35px",
          display: "flex",
          flexDirection: "column",
          overflowY:"auto",
        }}
      >
        <button
          style={{
            alignSelf: "flex-end",
            // background: "red",
            margin:"7px 20px",
            fontWeight:"bold",
            color: "black",
            padding: "5px 5px",
            cursor: "pointer",
            border: "none",
            outline:"none",
            // borderRadius: "6px",
            // marginBottom: "20px",
          }}
          onClick={() => setIsCartOpen(false)}
        >
          X
        </button>

       <CartSliderContent setIsCartOpen ={setIsCartOpen}/>

      </div>

  </div>
  )}

export default Home;


