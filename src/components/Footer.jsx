import React from 'react';
import "../assets/css/footer.css";
import logo from "../assets/img/logo_white_1x.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button } from '@mui/material';
import footer_bg from "../assets/img/footer_bg.jpg";

const Footer = () => {
  return (
    <div className='footer-outer'>
        <div className='footer-up' style={{backgroundImage:`url(${footer_bg})`}}>
            <div>
                <img src={logo} alt="" />
                <p>
                    <span><FacebookIcon/></span>
                    <span><XIcon/></span>
                    <span><InstagramIcon/></span>
                    <span><YouTubeIcon/></span>
                </p>
            </div>
            <div>
                <h3>Nick's Roasting Co.</h3>
                <p>2558 Greenwood Lane,<br /> 120 Cameron Park,<br /> CA 95682</p>
            </div>
            <div>
                <p>Info@nicksroastingco.com</p>
                <p>1800 297 4001</p>
                <Button sx={{backgroundColor:"#c8a27a",color:"white"}}>Contact Us</Button>
            </div>
        </div>
        <div className='footer-down'>
            <p>Copyright@ 2024 by Nick's Roasting Co.</p>
            <p>Developed & Desing by Barodaweb | The E-Catalogue Designe</p>
        </div>
    </div>
  )
}

export default Footer