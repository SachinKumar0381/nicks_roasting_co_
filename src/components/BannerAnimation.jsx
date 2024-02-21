import React, { useRef, useState, useEffect } from 'react';
import img_01 from "../assets/img/img_02.png";
import img_02 from "../assets/img/img_01.png";

const BannerAnimation = () => {
    const cursorRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        const cursor = cursorRef.current;
        const image1 = image1Ref.current;
        const image2 = image2Ref.current;
        const imageOffset = 100; // Adjust the offset based on your design
  
        setCursorPos({ x: event.clientX, y: event.clientY });
  
        // Move images within a certain range
        const maxX = window.innerWidth - imageOffset;
        const maxY = window.innerHeight - imageOffset;
  
        const x = Math.min(maxX, Math.max(imageOffset, event.clientX));
        const y = Math.min(maxY, Math.max(imageOffset, event.clientY));
  
        image1.style.transform = `translate(${-x / 5}px, ${-y / 10}px)`; // Adjust the division factor for the parallax effect
        image2.style.transform = `translate(${x / 5}px, ${y / 15}px)`; // Adjust the division factor for the parallax effect
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div className="App">
        <div className="content">
          <img
            src={img_01}
            alt="Moving Image 1"
            className="moving-image"
            ref={image1Ref}
          />
          <img
            src={img_02}
            alt="Moving Image 2"
            className="moving-image"
            ref={image2Ref}
          />
        </div>
      </div>
  )
}

export default BannerAnimation