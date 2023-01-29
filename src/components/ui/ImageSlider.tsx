import { useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "assets/image_login-min.jpg",
    "assets/emptyroom.jpg",
    "assets/livingroom-min.jpg",
  ];

  const goToPrevSlide = () => {
    let newSlide = currentSlide - 1;
    if (newSlide < 0) {
      newSlide = images.length - 1;
    }
    setCurrentSlide(newSlide);
  };

  const goToNextSlide = () => {
    let newSlide = currentSlide + 1;
    if (newSlide === images.length) {
      newSlide = 0;
    }
    setCurrentSlide(newSlide);
  };

  return (
    <div className="w-3/5 h-96">
      <img
        src={`/${images[currentSlide]}`}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-auto object-contain"
      />
      <div>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
