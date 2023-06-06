import React from 'react';
import './give.css';
import Navbar from '../../components/navbar/Navbar';

export default function Give() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1>Your Support Matters</h1>
        </div>
        <div className="row justify-content-center my-3">

          <div className="col-md-5">
            <p>
              By generously supporting [Church Name], you enable us to spread the love of Christ, serve those in need, and create a vibrant place of worship and community. Thank you for your generosity!
              <br /><br />
              Click the link below to securely give your tithes and offerings online. Together, we can make a difference and bring glory to His name.
              <br /><br />
              Thank you for partnering with us to transform lives and make a positive impact.
            </p>
            <a
              type="submit"
              className="giveButton"
              href='https://adventistgiving.org/donate/ANIM2I'
            >
              Give Now
            </a>
          </div>

          <div className="col-md-5">2</div>

        </div>

      </div>
    </>
  )
}
