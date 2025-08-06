import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate,Link } from 'react-router-dom';
const SignUp= () => {

    const navigate = useNavigate();
     const today = new Date().toISOString().split("T")[0]; // returns like this 2025-07-22T06:55:13.045Z

    const{register, handleSubmit,formState:{errors },reset} = useForm();
    const onSubmit=(data)=>{
        console.log(data);
        navigate("/login")
    }
   


  return (
    <div style={formContainerStyle}>
        <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
            <h2 style={{headingStyle}}>SIGN UP</h2>
            {/* name */}
            <input
            autoComplete='off'
            style={inputStyle}
            type="text"
            placeholder="Name"
            maxLength={20} // blocks typing after 20 chars

            {...register("name",{

                required:"Name is required!",
                minLength: {
                    value:3,
                    message:"Name must be aleast 3 characters"
                },
                maxLength: {
                    value:20,
                    message:"Name should not exceed 20 charaters"
                },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Name should contain only alphabets(no space)",
                }
            })}
            />
            {errors.name && (
                <span style={errorStyle}>{errors.name.message}</span>
            )}
            {/* username */}
            <input
            autoComplete='off'
            style={inputStyle}
            type="text"
            placeholder='UserName'
            //  maxLength={15}
            {...register("username",{
                required:"UserName is Required!",
                minLength:{
                    value:3,
                    message:"Minimum 3 characters are required."
                },
                maxLength: {
                    value: 15,
                    message:"Should not exceed 15 characters"
                },
                pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Username must contain only alphabets & numbers (no space or specail chars)",
                 },
            })}
            />
            {errors.username && (
                <span style={errorStyle}>{errors.username.message}</span>
            )}
          {/* password */}
          <input
          style={inputStyle}
          type="password"
          placeholder='Password'
            maxLength={8}
          {...register("password",{
            required: "Password is required.",
             minLength: {
                 value: 8,
                 message: "Password must be 8 characters",
             },
            pattern: {
                   value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                   message: "Password must contain at least 1 number and 1 special character",
           },
            // validate: (value) => {
            //     value.includes("@") || "Password must include '@'"
            // }
          })}/>
          {errors.password && (
            <span style={errorStyle}>{errors.password.message}</span>
          )}

          {/* Email */}
          <input
          autoComplete='off'
          style={inputStyle}
          type="email"
          placeholder='Email'
          {...register("email",{
            required:"Email is required.",
            pattern: {
                value: /^[a-z][a-zA-Z0-9._-]*@[a-z]+\.[a-z]{2,4}$/,
                message: "Enter a valid email address",
             },

          })}/>
         {errors.email && (
            <span style={errorStyle}>{errors.email.message}</span>
          )}

          {/* DOB */}
          <input
           style={inputStyle}
          type="date"
          placeholder='DOB'
          min="1970-01-01"
          max={today}
          {...register("dob",{
            required:"Date of Birth is required"
          })}

          />
         {errors.dob && (
            <span style={errorStyle}>{errors.dob.message}</span>
          )}



          {/* Gender */}
          <div>
             <label>Gender:</label>
          <label>  <input type="radio" value="Male" {...register("gender")}/>Male</label>
          <label> <input type="radio" value="Female" {...register("gender")}/>Female</label>
          <label>  <input type="radio" value="Others" {...register("gender")}/>Others</label>
          </div>
         
         
          
         



          {/* Submit Button */}
          <button
          style={buttonStyle}
          type="submit"
          onMouseEnter={(e) => (e.target.style.border="#813d9f")}
          onMouseLeave={(e) => (e.target.style.border="#9b59b6")}>
            Register
          </button>
          <p style={{ textAlign: "center" }}>
  Already have an account? <Link to="/login">Login</Link>
</p>



        </form>
    </div>
  )
}

export default SignUp


const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

const formStyle = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.25)",
  width: "370px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const headingStyle = {
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

