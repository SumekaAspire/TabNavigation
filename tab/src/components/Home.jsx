
import "../App.css";
import {NavLink, Outlet} from "react-router-dom";
import "../css/HomePage.css";
import Footer from "./Footer";


function Home() {

  return (
  <div className="tab-content">
     
        

    <div>
   
       <nav className="tab-nav">
         <div className="nav-header">SHOPPIFY</div>
        <NavLink to="/home/about" className="tab-link">About</NavLink>
        <NavLink to="/home/newlaunch" className="tab-link">NewLaunch</NavLink>
        <NavLink to="/home/profile" className="tab-link">Profile</NavLink>
        <NavLink to="/home/products" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Products</NavLink>
         <NavLink to="/home/contacts" className="tab-link">Contacts</NavLink> 
        <NavLink to="/home/test" className="tab-link">Test</NavLink>
        
       

      </nav>

      <div>
        <Outlet />
      </div>
      

     </div>
       <Footer/>
  </div>
  )}

export default Home;


