import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Products from "./pages/products/Products";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Test from "./pages/test";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./components/Home";
import NewLaunch from "./pages/NewLaunch";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import CartPage from "./pages/Cart/CartPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home/about" />} /> */}
    
        {/* <Route path="/home" element={<HomePage />}>
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="test" element={<Test />} />
        </Route> */}

          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="login" element={<Login/>}/>
          
          
          <Route path="/home" element={
            <ProtectedRoutes>
            <Home/>
          </ProtectedRoutes>}>
           
           {/* default to /home/about */}
          <Route index element={<Navigate to="about"/>}/>


          <Route path="about" element={<About />} />
          <Route path="newlaunch" element={<NewLaunch/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="test" element={<Test />} />
          <Route path="cart" element={<CartPage/>}/>
        </Route>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
