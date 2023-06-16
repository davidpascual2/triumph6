import React from 'react';
import './footer.css';
import triumph from '../../assets/logo.001.beige.PNG';

const churchName = "Triumph Seventh-Day Adventist Chruch";
const address = "410 H ST NE";
const cityStateZip = "Auburn WA 98002-4369";
const phoneNumber = "253-951-0250";
const churchHours = "8AM-4PM M-TH, 8AM-12PM F"

//================================

export default function Footer() {
  return (
    <>
      <div className='footer container-fluid'>
        <div className='row justify-content-md-between'>
          <div className='logoContainer2 col-md-4  d-flex justify-content-center justify-content-md-start'>
            <img className='triumphLogo2 d-none d-md-flex' src={triumph} alt="" />
          </div>
          <div className='footerDesc col-md-4 text-center pt-md-3 pt-md-0'>
            <p className="my-2">Contact Us</p>
            <p className="my-2">{address}, {cityStateZip}</p>
            <p className="my-2">{phoneNumber}</p>

          </div>
          <div className="created col-md-4 m-0 p-md-0 pb-2 d-flex">
            <p className="d-flex">Copyright Triumph Adventist Chruch &copy; 2023</p>
          </div>
        </div>
      </div>
    </>
  )
}
