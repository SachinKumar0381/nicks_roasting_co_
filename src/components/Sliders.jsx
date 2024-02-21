import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_01 from "../assets/img/11062b_54b0313b65a44b479c9f065e126f7c06~mv2.webp";
import img_02 from "../assets/img/11062b_2974cb752e974ea192d619ea0d64120d~mv2.webp";
import img_03 from "../assets/img/11062b_ca88a6f079324d7c98963f33c1f2d48f~mv2.webp";

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container" style={{ padding: "5%" }}>
      <Slider {...settings}>
        <div className="flip-container">
          <div className="flip-card">
            <div className="front">
              <img src={img_01} alt="" className="slider-img" />
            </div>
            <div className="back">
              <p>Our Lightly Roasted Coffee Beans offer the world a chance to brighten every day with a whole lot of flavor and inspiration. Try these to receive the perfect balance between bold flavor and subtle sweetness.</p>
            </div>
          </div>
          <h3 className="slider-h3">LIGHTLY ROASTED COFFEE BEANS</h3>
        </div>
        <div className="flip-container">
          <div className="flip-card">
            <div className="front">
              <img src={img_02} alt="" className="slider-img" />
            </div>
            <div className="back">
              <p>With our Triple Blended Coffee Beans you can finally feel like a professional barista. Bright and clean with an intense burst of flavor, these full-bodied beans strike a perfect balance between the most delicate roasts and fruitful aromas.</p>
            </div>
          </div>
          <h3 className="slider-h3">TRIPLE BLENDED COFFEE BEANS</h3>
        </div>
        <div className="flip-container">
          <div className="flip-card">
            <div className="front">
              <img src={img_03} alt="" className="slider-img" />
            </div>
            <div className="back">
              <p>Skillfully roasted and carefully blended, our Columbian Blended Espresso Beans don’t just wake you up in the morning, they pack a lasting punch that is sure to leave you wanting more. Silky smooth and full of layered flavors, there’s really no better way to start your day.</p>
            </div>
          </div>
          <h3 className="slider-h3">COLUMBIAN BLENDED ESPRESSO BEANS</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
