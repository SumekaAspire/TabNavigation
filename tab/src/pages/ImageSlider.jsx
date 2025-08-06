import React, { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/401",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400",
  "https://picsum.photos/id/1020/600/400",

];


  if (!images || images.length === 0) {
    return <p>No images to display</p>;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={sliderContainer}>
      <button onClick={goToPrevious} style={navButton}>&lt;</button>
      <img
        src={images[currentIndex]}
        alt="slide"
        style={imageStyle}
      />
      <button onClick={goToNext} style={navButton}>&gt;</button>
    </div>
  );
};

const sliderContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  padding: "20px",
};

const imageStyle = {
  width: "500px",
  height: "300px",
  borderRadius: "8px",
  objectFit: "cover",
};

const navButton = {
  padding: "10px",
  fontSize: "24px",
  cursor: "pointer",
};

export default ImageSlider;
