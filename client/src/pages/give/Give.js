import React from 'react';
import './give.css';
import Navbar from '../../components/navbar/Navbar';

export default function Give() {
  return (
    <>
      <div className=" give container-fluid d-flex flex-column ">


        <div className="row my-md-5 order-1 justify-content-center">
          <div className="col-md-12 col-11">
            <h1>
              Your Support Matters
            </h1>
          </div>
        </div>


        <div className="row justify-content-evenly order-3 order-md-2 my-4 my-md-0">
          <div className="col-md-5 col-11 p-3">

            <p>
              By generously supporting [Church Name], you enable us to spread the love of Christ, serve those in need, and create a vibrant place of worship and community. Thank you for your generosity!
              <br /><br />
              Click the link below to securely give your tithes and offerings online. Together, we can make a difference and bring glory to His name.
              <br /><br />
              Thank you for partnering with us to transform lives and make a positive impact.
            </p>

          </div>

          <div className="col-md-5 col-11 d-flex align-items-center verseContainer">

            <h4 className="verseFont p-3">"Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
              <br /><br />

              Malachi 3:10</h4>


          </div>

        </div>



        <div className="row justify-content-center my-md-5 mt-3 order-2 order-md-3">

          <a
            type="submit"
            className="giveButton col-md-3 col-5 text-center"
            href='https://adventistgiving.org/donate/ANIM2I'
          >
            Give Now
          </a>

        </div>

      </div>
    </>
  )
}
