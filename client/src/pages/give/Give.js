import React from 'react';
import './give.css';
import Navbar from '../../components/navbar/Navbar';

export default function Give() {
  return (
    <>
      <div className="container-fluid d-flex flex-column align-items-center ">
        <div className="row my-5">
          <h1>Your Support Matters</h1>
        </div>
        <div className="row justify-content-evenly my-5">

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

          <div className="col-md-5 d-flex align-items-center verseContainer">
            <div className=" ">
              <h4 className="verseFont">"Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
                <br /><br />

                Malachi 3:10</h4>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
