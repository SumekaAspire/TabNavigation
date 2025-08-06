import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "./components/HomePage";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Test from "./pages/test";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./components/Home";
import NewLaunch from "./pages/NewLaunch";

function App() {
  return (
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

          <Route path="/home" element={<Home/>}>
          <Route path="about" element={<About />} />
          <Route path="newlaunch" element={<NewLaunch/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
