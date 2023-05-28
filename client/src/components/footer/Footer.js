import React from 'react';
import './footer.css';
import triumph from '../../assets/logo.001.beige.PNG';

const churchName = "Triumph Seventh-Day Adventist Chruch";
const address = "410 Butte Ave S";
const cityStateZip = "Auburn WA 98002";
const phoneNumber = "253-951-0250";

//================================

export default function Footer() {
  return (
    <>
    <div className='footer container-fluid d-flex flex-md-row flex-column'>
        <div className='logoContainer2'>
            <img className='triumphLogo2' src={triumph} alt="" />

        </div>
        <div className='footerDesc'>
            <p>{churchName}</p>
            <p>{address}</p>
            <p>{cityStateZip}</p>
            <p>{phoneNumber}</p>
        </div>
        <div className="created">
            <p>Copyright Triumph Adventist Chruch &copy; 2023</p>
        </div>
    </div>
    </>
  )
}
