import React from 'react';
import './give.css';
import Navbar from '../../components/navbar/Navbar';

export default function Give() {
  return (
    <>
    <div>
      <Navbar />
      <a 
        type="submit" 
        className="giveButton"
        href='https://adventistgiving.org/donate/ANIM2I'
      >
      Give Now
      </a>
    </div>
    </>
  )
}
