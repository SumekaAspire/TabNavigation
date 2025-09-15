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
import { ToastContainer } from "react-toastify";
import Electronics from "./pages/Products/Electronics";
import Jewellery from "./pages/Products/Jewellery";
import Books from "./pages/Products/Books";
import Clothing from "./pages/Products/Clothing";
import { WishlistProvider } from "./context/WishlistContext";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import PaymentPage from "./pages/Cart/PaymentPage";
import CartSliderContent from "./pages/Cart/CartSliderContent";


function App() {
  return (
    <CartProvider>
      <WishlistProvider>
      <Router>
       <Routes>
        {/* <Route path="/" element={<Navigate to="/home/about" />} /> */}
    
        {/* <Route path="/home" element={<HomePage />}>
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile >} />
          <Route path="products" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="test" element={<Test />} />
        </Route> */}

          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="wishlist" element={<WishlistPage/>}/>

          
          
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
          <Route path="electronics" element={<Electronics/>}/>
          <Route path="jewellery" element={<Jewellery/>}/>
          <Route path="books" element={<Books/>}/>
          <Route path="clothing" element={<Clothing/>}/>
          <Route path="wishlist" element={<WishlistPage/>}/>
          <Route path="cartSlider" element={<CartSliderContent/>}/>
          <Route path="payment" element={<PaymentPage/>}/>



        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />

    </Router>
      </WishlistProvider>
      
    </CartProvider>
  );
}

export default App;
