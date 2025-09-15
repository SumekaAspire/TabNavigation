import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const PaymentPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // data = { phone: '...', paymentMethod: 'UPI'/'COD' }
    toast.success("✅ Payment Successful!");
    
    // call backend to send SMS
    await fetch("http://localhost:5000/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Payment</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Mobile Number */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold" }}>Mobile Number</label>
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
            style={{
              width: "90%",
              padding: "10px",
              marginTop: "8px",
              border: errors.phone ? "1px solid red" : "1px solid #221f1fff",
            }}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
        </div>

        {/* Payment Methods */}
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold" }}>Choose Payment Method:</p>

          <label style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <input
              type="radio"
              value="UPI"
              {...register("paymentMethod", { required: "Select a payment method" })}
            />
            <span style={{ marginLeft: "10px" }}>UPI</span>
          </label>

          <label style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <input
              type="radio"
              value="COD"
              {...register("paymentMethod", { required: "Select a payment method" })}
            />
            <span style={{ marginLeft: "10px" }}>Cash on Delivery</span>
          </label>

          {errors.paymentMethod && (
            <p style={{ color: "red" }}>{errors.paymentMethod.message}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            background: "black",
            color: "white",
            padding: "12px 20px",
            width: "100%",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Pay Now
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
     
    </div>
  );
};

export default PaymentPage;
