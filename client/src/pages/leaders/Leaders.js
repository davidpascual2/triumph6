import React from 'react';
import './leaders.css';
import daisy from '../../assets/daisy.jpeg';
import eddie from '../../assets/eddie.jpeg';
import trino from '../../assets/trino.jpeg';
import obed from '../../assets/obed.jpeg';
import kenneth from '../../assets/Pic_Kenneth.jpg';





export default function Leaders() {
  return (
    <>
      <div className="container-fluid backgroundcolor">
        <div className="row behindnav">

        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 text-center ">
            <h1>Leadership</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <h2 className="m-4">Pastor</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 col-9">
            <img src={kenneth} className="rounded img-fluid p-0" alt="KennethPhoto" />
          </div>
          <div className="col-md-5 col-9 mt-4 mt-md-0">
            <div className="row">
              <h3>
                Kenneth Martinez
              </h3>
            </div>
            <div className="row">

              <p>
                Pastor Martinez is a lifelong learner and holds [relevant degrees or certifications] from [educational institutions]. They are continually seeking to grow in their understanding of God's Word and are committed to ongoing personal and professional development to better serve the needs of the congregation.<br></br>

                With a heart for worship, a love for people, and a deep faith in God, Pastor Martinez considers it a privilege and joy to serve as the spiritual shepherd of [Church Name]. Their vision is to see lives transformed, hearts healed, and communities impacted by the power of God's love and grace.
              </p>
            </div>
          </div>
        </div>
        {/* Edlers */}
        <div className="row">
          <div className="col-3 m-4 mt-5">
            <h2>Elders</h2>
          </div>
        </div>
        <div className="row justify-content-evenly my-3">
          <div className="col-md-5 col-7 my-2">
            <div className="row ">
              <img src={daisy} className="rounded p-0" alt="DaisyPhoto" />
            </div>
            <div className="row mt-1">
              <h5 className="p-0">
                Daisy

              </h5>
            </div>
          </div>
          <div className="col-md-5 col-7 my-2">
            <div className="row">
              <img className="rounded p-0" src={obed} alt="ObedPhoto" />
            </div>
            <div className="row mt-1">
              <h5 className="p-0">
                Obed

              </h5>
            </div>
          </div>
          <div className="col-md-5 col-7 my-2">
            <div className="row">
              <img className=" rounded p-0" src={eddie} alt="EddiePhoto" />
            </div>
            <div className="row mt-1">
              <h5 className="p-0">
                Eddie

              </h5>
            </div>
          </div>
          <div className="col-md-5 col-7 my-2">
            <div className="row">
              <img className=" rounded p-0" src={trino} alt="TrinoPhoto" />
            </div>
            <div className="row mt-1">
              <h5 className="p-0">
                Trino

              </h5>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}
