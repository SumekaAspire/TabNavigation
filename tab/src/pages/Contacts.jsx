import React from "react";
import { useForm } from "react-hook-form";
import "../css/ContactPage.css";
import {
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSmile,
  FaRegSmile,
  FaGrinBeam,
} from "react-icons/fa";

const Contacts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Thanks ${data.name}, we received your message!`);
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div style={{ margin: "10px", padding: "40px" }}>
      <h2>GET IN TOUCH WITH US</h2>
      <p>
        Our mission is to empower our customers by delivering exceptional
        products/services that enhance their lives and businesses. We strive to
        create value through innovation, integrity, and a commitment to
        excellence in everything we do.
      </p>

      <div className="contact-wrapper">
        {/* LEFT SIDE - Contact Info */}
        <div className="contact-info">
          <div className="info-block">
            <h3>CONTACTS</h3>
            <p>
              <FaEnvelope className="icon" /> shoppifysupport@gmail.com
            </p>
            <p>
              <FaMobileAlt className="icon" /> Mobile: +91 98765 67894
            </p>
            <p>
              <FaPhone className="icon" /> Landline: 011-23456789
            </p>
          </div>

          <div className="info-block">
            <h3>OUR OFFICE</h3>
            <p>
              <FaMapMarkerAlt className="icon" /> 123 Main Street, New Delhi,
              <p>India - 603103.</p>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p>
            We’d love to hear from you! <FaSmile className="icon" />
            Fill out the form below.{" "}
          </p>

          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              maxLength={15}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 15,
                  message: "Name cannot exceed 15 characters",
                },
                validate: (value) =>
                  value.trim().length > 0 ||
                  "Name cannot be empty or just spaces",
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              autoComplete="off"
              maxLength={50} 
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z][a-zA-Z0-9._-]*@[a-z]+\.[a-z]{2,4}$/,
                  message: "Enter a valid email address (e.g., dhv@jdsk.com)",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              maxLength={300}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                validate: (value) =>
                  value.trim().length > 0 ||
                  "Message cannot be empty or just spaces",
              })}
            />
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
