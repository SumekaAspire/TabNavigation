import React from 'react'
import {useForm} from 'react-hook-form'
import { ToastContainer,toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();
    const{register, handleSubmit,formState:{errors },reset} = useForm();
    const onSubmit=(data)=>{
        console.log(data);
         if (data.username === "sumeka" && data.password === "1234567$") {
         console.log("Login successful", data); // object of data
        //  console.log("Login successful", JSON.stringify(data));

         localStorage.setItem("isLoggedIn", 'true');
         localStorage.setItem('username', data.username)
         navigate("/home/about");
         } else {
          toast.error("Invalid credentials");
         }
    }



  return (
    <div style={formContainerStyle}>
        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <h2>LOGIN</h2>
        <input
        autoComplete='off'
          type="text"
          placeholder="Username"
          maxLength={15} // blocks entry of charcaters after 15
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
            maxLength: {
              value: 15,
              message: 'Name cannot exceed 15 characters',
            },
            pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Username must contain only alphabets & numbers (no space or specail chars)",
                 },
          })}
          style={inputStyle}
        />
        {errors.username && (
          <span style={errorStyle}>{errors.username.message}</span>
        )}

        <input
          type="password"
          placeholder="Password"
          maxLength={8}
          {...register("password", {
            required: "Password is required",
             minLength: {
                 value: 8,
                 message: "Password must be 8 characters",
             },
          })}
          style={inputStyle}
        />
        {errors.password && (
          <span style={errorStyle}>{errors.password.message}</span>
        )}

        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#813d9f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#9b59b6")}
        >
          Login
        </button>
        <p style={{ textAlign: "center" }}>
         Don't have an account? <Link to="/signup">Register here</Link>
        </p>

      </form>
        <ToastContainer position='top-center' autoClose={3000}/>
    </div>
  )
}

export default Login


const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  
};

const formStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
  width: "320px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const headingStyle = {
  margin: 0,
  textAlign: "center",
  color: "#333",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#9b59b6",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginTop: "-10px",
};


