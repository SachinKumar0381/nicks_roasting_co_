import React from 'react';
import "../assets/css/banner.css";
import banner_img from "../assets/img/banner_img.png";
import BannerAnimation from './BannerAnimation';

const Banner = () => {
  return (
    <div style={{backgroundImage:`url(${banner_img})`,border:"1px solid transparent",backgroundPosition:"center",backgroundSize:"cover",width:"100%",height:"auto",position:"relative"}}>
        <div className='banner-header'>
        <h1>NICK'S</h1>
        <h1>ROASTING</h1>
        <h1>CO.</h1>
        </div>
        <BannerAnimation/>
    </div>
  )
}

export default Banner