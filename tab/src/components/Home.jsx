
import "../App.css";
import {NavLink, Outlet} from "react-router-dom";
import "../css/HomePage.css";
import Footer from "./Footer";
import LogoutButton from "./LogoutButton";


function Home() {

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


