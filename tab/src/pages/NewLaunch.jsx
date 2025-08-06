import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NewLaunch = () =>{

  const settings = {
    dots: true,               
    infinite: true,           // loop slides
    speed: 500,               // transition speed
    slidesToShow: 1,          // at a time
    slidesToScroll: 1,        
    autoplay: true,          
    autoplaySpeed: 3000,      
    arrows: true              // show prev/next arrows
  };

  const images = [
    "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/401",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",

  ];

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
      <div><p>uyfgdsyrdgfv</p></div>
      <p>sugfvreryufergfer7yf</p>
    </div>
  );
};



export default NewLaunch

const sliderWrapper = {
  width: "100vw",          // full width of the viewport
  margin: "0 auto",
  padding: "0px",
  overflow: "hidden",      // prevent horizontal scroll
};

const imageStyle = {
  width: "100%",           
  height: "400px",         
  objectFit: "cover",
  borderRadius: "0px"
};