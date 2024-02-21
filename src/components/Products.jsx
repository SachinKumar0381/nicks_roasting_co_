import React from 'react';
import "../assets/css/product.css";
import Sliders from './Sliders';

const Products = () => {
  return (
    <div className='pd-tp-50'>
        <h1 className='product-header'>OUR PRODUCTS</h1>
        <div>
        <Sliders/>
        </div>
    </div>
  )
}

export default Products