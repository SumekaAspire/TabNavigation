import React from "react";
import Button from "../problems/Button";
import SimpleForm from "../problems/forms/simpleForm";
import Counter from "../problems/counter";
import FetchDataAPI from "../problems/FetchDataAPI";
import ImageSlider from "./ImageSlider";

const test = () => {
  return (
    <div>
      <p>Form with username and password</p>
      <SimpleForm />
      <p>Toggle button using custom hooks</p>
      <Button />
      <Counter/>
      {/* <FetchDataAPI/> */}
      <ImageSlider/>
      
    </div>
  );
};

export default test;

// import React,{useState}from 'react'
// import Button from '../problems/customhooks/Button';

// //2 inputs, username, password

// const test = () => {
// const[userName, setUserName]=useState("");
// const[password, setPassword]=useState("");

// const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("username:"+userName+"password:"+ password);
// }

//   return (
//     <div>
//         <form>
//     <input name="username" placeholder="username" onChange= {(e) => setUserName(e.target.value)}></input><br/>
//     <input name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}></input><br/>
//     <button onClick={handleSubmit}> Submit</button>
//         </form>
//         <br/><br/><br/>
//         <Button/>

//     </div>
//   )
// }

// export default test;
