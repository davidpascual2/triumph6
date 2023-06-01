import React from 'react';
import './whoWeAre.css'
import { useEffect } from "react";





export default function WhoWeAre() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const parallaxContainer = document.querySelector('.whoWeAreComp');
      const parallaxText = document.querySelector('.whoWeAreText');

      parallaxContainer.style.backgroundPositionY = `${-scrollPosition * 0.02}px`;
      parallaxText.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='whoWeAreComp container-fluid'>
        <div className='d-flex whoWeAreContainer'>
          <div className='row justify-content-md-start justify-content-center mb-md-5 ms-md-5 mb-3 mx-1'>
            <div className="whoWeAreText col-md-7 col-11">
              <h1 className="">Who We Are</h1>
              <p>All are welcome. Whether you're seeking answers to life's questions, searching for a spiritual home, or simply looking for a place to belong, we invite you to join us at [Church Name]. Together, let's discover the joy of walking in faith, finding strength in fellowship, and experiencing the transformative power of God's love.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}