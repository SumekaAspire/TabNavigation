import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "../../css/Cart.css"
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; 

const PaymentPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    toast.success("Payment Successful!");
    reset();

    
  };

  return (
   <div className="layout">
     <div className="backbtn-alignment">
         <button 
         className="btn-back"
         onClick={()=> navigate(-1)}
      >
        <FaArrowLeft size={20}/>Back
      </button>

     </div>
     <div className="payment-content">
        {/* back button */}
    
      <h2>Payment - Delivery</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Mobile Number */}
        <div className="form-mobileno">
          <label className="bold">Mobile Number: </label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            maxLength={10}
            minLength={10} 
            {...register("phone", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Invalid mobile number",
              },
            })}
            className="inputfield-mobileno"
          />
          {errors.phone && <p className="errorcolor">{errors.phone.message}</p>}
        </div>

        {/* Payment Methods */}
        <div className="form-paymentmethod">
          <p className="bold">Choose Payment Method:</p>

          <label className="methods">
            <input
              type="radio"
              value="UPI"
              {...register("paymentMethod", { required: "Select a payment method" })}
            />
            <span className="left">UPI</span>
          </label>

          <label className="methods">
            <input
              type="radio"
              value="COD"
              {...register("paymentMethod", { required: "Select a payment method" })}
            />
            <span className="left">Cash on Delivery</span>
          </label>

          {errors.paymentMethod && (
            <p className="errorcolor">{errors.paymentMethod.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn-paynow"
        >
          Pay Now
        </button>
        
        
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
     
    </div>

    </div>
    );
};

export default PaymentPage;
