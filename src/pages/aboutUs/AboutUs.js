import React from 'react';
import './aboutUs.css';
import Leadership from '../../components/leadership/Leadership'
import HowWeStarted from "../../components/howWeStarted/HowWeStarted.js";
import CoreBeliefs from "../../components/coreBeliefs/CoreBeliefs.js";
import daisy from '../../assets/daisy.jpeg';
import eddie from '../../assets/eddie.jpeg';
import trino from '../../assets/trino.jpeg';
import obed from '../../assets/obed.jpeg';
import kenneth from '../../assets/Pic_Kenneth.jpg';

//=================================

export default function AboutUs() {
  return (
    <>
      <div className=" backgroundcolor">
        <HowWeStarted />
        <CoreBeliefs />
        <Leadership />
      </div>
    </>
  )
}
