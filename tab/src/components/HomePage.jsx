
import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToSignUp = () => {
    navigate("/signup");
  };
  const handleNavigateToLogin = () => {
    navigate("/login");
  };
   

  return (
    <div >
      <div >
        <h1>SHOPPING WEBSITE !!</h1>
      </div>

      <div style={buttonContainerStyle}>
        <button onClick={handleNavigateToSignUp} style={buttonStyle}>
          Register
        </button>
        <button onClick={handleNavigateToLogin} style={buttonStyle}>
          Login
        </button>
      </div>

      <div style={sectionStyle}>
        <h2>JOURNEY</h2>
        <p>
          At our Company, we are dedicated to providing top-notch
          products/services that cater to the unique needs of our clients.
          Founded in 1990, we have built a reputation for quality, innovation,
          and customer satisfaction. Our team of experts is passionate about
          what they do, ensuring that every interaction with our brand is a
          positive one.
          Our mission is to empower our customers by delivering exceptional
          products/services that enhance their lives and businesses. We strive
          to create value through innovation, integrity, and a commitment to
          excellence in everything we do.
          We envision a world where everyone has access to sustainable and
          innovative solutions that improve their quality of life. At our
          Company, we aim to lead the way in our industry by setting new
          standards for quality and service.
        </p>
      </div>
    
    </div>
  );
}

const buttonStyle = {
  padding: "7px 15px",
  fontSize: "13px",
  cursor: "pointer",
  backgroundColor: "black",
  color: "white",
  borderRadius: "4px",
  margin: "10px",
};

const buttonContainerStyle = {
  position: "absolute",
  top: "50px",
  right: "100px",
  display: "flex",
  gap: "10px",
};

const sectionStyle = {
  margin: "50px auto",
  padding: "20px",
  maxWidth: "60rem",
  height:"20rem",
  textAlign: "center",
  background: "rgb(196, 188, 196)",
  borderRadius: "8px",
  boxShadow: "0 6px 40px rgba(0, 0, 0, 0.25)",
  hover:"green"
};

export default HomePage;




