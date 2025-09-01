
import "../App.css";
import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import "../css/HomePage.css";
import Footer from "./Footer";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import CartSliderContent from "../pages/Cart/CartSliderContent";

function Home() {

  const{cart} = useContext(CartContext);
  const totalItems = cart.reduce((acc, item)=> acc +  item.quantity, 0)

  const [isCartOpen, setIsCartOpen] = useState(false);

 return (
  <div className="tab-content">
     
        
   
    <nav className="tab-nav">
      
      <div className="nav-header">SHOPPIFY</div>
          <div className="tab-nav-links">

       <div className="tab-left">                                  
        <NavLink to="/home/about" className="tab-link">About</NavLink>
        <NavLink to="/home/newlaunch" className="tab-link">NewLaunch</NavLink>
        <NavLink to="/home/profile" className="tab-link">Profile</NavLink>
        <NavLink to="/home/products" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Products</NavLink>
        <NavLink to="/home/contacts" className="tab-link">Contacts</NavLink> 
        <NavLink to="/home/test" className="tab-link">Test</NavLink>
        <NavLink to="/home/cart" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Cart{totalItems >0 &&( <span 
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
        <div onClick={()=> setIsCartOpen(true)} style={{cursor:"pointer"}}> 
          <FaShoppingCart size={20}/>
          {totalItems >0 &&(
            <span style={{
                    position: "absolute",
                    right: "3.5rem",
                    bottom:"1.5rem",
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "1px 5px",
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
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          overflowY:"auto",
        }}
      >
        <button
          style={{
            alignSelf: "flex-end",
            // background: "red",
            fontWeight:"bold",
            color: "black",
            padding: "6px 10px",
            cursor: "pointer",
            // borderRadius: "6px",
            // marginBottom: "20px",
          }}
          onClick={() => setIsCartOpen(false)}
        >
          X
        </button>

       <CartSliderContent/>
      </div>


  </div>
  )}

export default Home;


