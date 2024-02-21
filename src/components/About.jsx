import React from 'react';
import "../assets/css/about.css";
import img_01 from "../assets/img/coffee_table_image.webp";
import { Button } from '@mui/material';
import bg_img from "../assets/img/bg_01.jpg";

const About = () => {
  return (
    <div style={{backgroundImage:`url(${bg_img})`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}} className='pd-tp-50'>
        <div className='about-flex'>
        <div className='about-left'>
        <h1 className='about-header'>WELCOME TO NICK'S <br />ROASTING CO.</h1>
            <h2>Good to the Last Sip</h2>
            <p>Coffee runs in our blood. At Nick's Roasting Co., we pick and brew the best beans to make sure the coffee you enjoy will be a unique and satisfying experience for both body and mind. We’re proud that our Coffee Shop has been a staple of Sacramento coffee lovers since 2023. Check out our products and best sellers.</p>
            <br /><br />
            <Button sx={{backgroundColor:"#c8a27a",color:"white",'&:hover':{backgroundColor:"black"}}}>Contact Us</Button>
        </div>
        <div className='about-right'>
            <img src={img_01} alt="" className='about-img'/>
        </div>
        </div>
    </div>
  )
}

export default About