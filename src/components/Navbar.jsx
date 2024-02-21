import React from 'react';
import "../assets/css/navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/img/logo_white_1x.png";

const Navbar = ({handleToggleMenu}) => {
  return (
    <div className='navbar'>
        <div className='logo-div'>
        <img src={logo} alt="" className='logo-img'/>
        </div>
        <MenuIcon onClick={handleToggleMenu} sx={{fontSize:"40px",'&:hover':{cursor:"pointer"}}}/>
    </div>
  )
}

export default Navbar