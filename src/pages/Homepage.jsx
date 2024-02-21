import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import logo from "../assets/img/logo_white_1x.png";
import "../assets/css/homepage.css";
import CloseIcon from '@mui/icons-material/Close';
import Banner from '../components/Banner';
import About from '../components/About';
import Products from '../components/Products';
import Openhour from '../components/Openhour';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Menubar from '../components/Menubar';

const Homepage = () => {
    const [menusec,setMenusec] = useState(false);
    const handleToggleMenu=()=>{
        setMenusec(!menusec)
    }
  return (
    <div>
        <Navbar handleToggleMenu={handleToggleMenu}/>
        {/* <Menubar/> */}
        {menusec && <div className='menu-div'>
            <div className='close-btn' onClick={handleToggleMenu}>
            <CloseIcon sx={{fontSize:"50px"}}/>
            </div>
            <div className='logo-div'>
                <img src={logo} alt="" className='logo-img'/>
            </div>
            <div className='h2-div'>
            <h2>HOME</h2>
            <h2>COFFEE</h2>
            <h2>TEA</h2>
            <h2>ICED</h2>
            <h2>BLENDED</h2>
            <h2>ENERGY</h2>
            <h2>BOBA</h2>
            <h2>FOOD</h2>
            <h2>CONTACT</h2>
            </div>
        </div>}
        <Banner/>
        <About/>
        <Products/>
        <Openhour/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Homepage