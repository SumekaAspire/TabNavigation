import "../App.css";
import "../css/HomePage.css"
import Profilecard from "./Profilecard";

function About() {
  

  return (
    <div style={{margin:"10px",padding:"20px"}}> 
      <div>
         <p style={{paddingBottom:"20px"}}>
          At our Company, we are dedicated to providing top-notch
          products/services that cater to the unique needs of our clients.
          Founded in [1970], we have built a reputation for quality, innovation,
          and customer satisfaction. Our team of experts is passionate about
          what they do, ensuring that every interaction with our brand is a
          positive one.
        </p>
        <div className="tab-boxContent">
        <h2>ABOUT US</h2>
        <p>
          At our Company, we are dedicated to providing top-notch
          products/services that cater to the unique needs of our clients.
          Founded in [Year], we have built a reputation for quality, innovation,
          and customer satisfaction. Our team of experts is passionate about
          what they do, ensuring that every interaction with our brand is a
          positive one.
        </p>

      </div>
        </div>  
        <br/>
    

      <div className="tab-boxContent">
        <h2>MISSION</h2>
        <p>
          Our mission is to empower our customers by delivering exceptional
          products/services that enhance their lives and businesses. We strive
          to create value through innovation, integrity, and a commitment to
          excellence in everything we do.
        </p>
      </div>
 <br/>
      <div className="tab-boxContent">
        <h2>VISION</h2>
        <p>
          We envision a world where everyone has access to sustainable and
          innovative solutions that improve their quality of life. At our
          Company, we aim to lead the way in our industry by setting new
          standards for quality and service.
        </p>
      </div>

      <div>
        <Profilecard
         name="Katsuko Saruhashi"
        description="Japanese geochemist who researched the carbon dioxide levels in seawater and the atmosphere."
        imageUrl="https://i.imgur.com/YfeOqp2.jpg"/>
      </div>
      
      
</div>
      
    


  );
 }




export default About;
