import React from 'react';
import "../assets/css/feature.css";
import img_01 from "../assets/img/Couple_Drinking_Coffee.webp";
import img_09 from "../assets/img/img_09.png";

const Features = () => {
  return (
    <div className='pd-tp-50'>
        <h1 className='feat-header'>SATISFACTION GUARANTEED</h1>
        <div className='feat-flex'>
            <div className='feat-left'>
                <img src={img_01} alt="" />
            </div>
            <div className='feat-right'>
                <h2>Outstanding Quality</h2>
                <p>Harmonious balance of flavor aroma, and texture. Well- roasted beans, showcasing distinct notes without bitterness, and rich satisfying taste. The freshness of the beans, the brewing method and attention to detail in the entire process contribute to the exceptional coffee experience.</p>
                <img src={img_09} alt="" className='sack-img'/>
            </div>
        </div>
    </div>
  )
}

export default Features