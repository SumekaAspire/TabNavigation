
import "../App.css";
import {NavLink, Outlet} from "react-router-dom";
import "../css/HomePage.css";
import Footer from "./Footer";
import LogoutButton from "./LogoutButton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Home() {

  const{cart} = useContext(CartContext);
  const totalItems = cart.reduce((acc, item)=> acc +  item.quantity, 0)

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
        marginLeft: "4px",
        background: "red",
        color: "white",
        borderRadius: "50%",
        padding: "2px 6px",
        fontSize: "12px",
      }}
    >
      {totalItems}
    </span>)}
        </NavLink>


         </div>
       <div className="tab-right">
        <LogoutButton/>
       </div>
</div>
    </nav>

      <div className="main-content"> <Outlet/>  </div>
      <Footer/>
  </div>
  )}

export default Home;


