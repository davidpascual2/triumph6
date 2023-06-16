import React from 'react';
import './leadership.css';
import daisy from '../../assets/daisy.jpeg';
import eddie from '../../assets/eddie.jpeg';
import trino from '../../assets/trino.jpeg';
import obed from '../../assets/obed.jpeg';
import kenneth from '../../assets/Pic_Kenneth.jpg';

//=================================

export default function Leadership() {
  return (
    <>
      <div className="container-fluid backgroundcolor">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mt-4 mb-2">
            <h1>Leadership</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-5 m-3">
            <h2 className="px-4">Pastor</h2>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-5 col-9 p-0">
            <img src={kenneth} className="pastorphoto img-fluid" alt="KennethPhoto" />
          </div>
          <div className="col-md-5 col-9 mt-4 mt-md-0">
            <div className="row">
              <h3>
                Kenneth Martinez
              </h3>
            </div>
            <div className="row">

              {/* <p>
                Kenneth is a lifelong learner and holds [relevant degrees or certifications] from [educational institutions]. Kenneth continually seeks to grow in his understanding of God's Word and is committed to ongoing personal and professional development to better serve the needs of the congregation.<br></br>

                With a heart for worship, a love for people, and a deep faith in God, Pastor Kenneth considers it a privilege and joy to serve as the spiritual shepherd of Triumph. His vision is to see lives transformed, hearts healed, and communities impacted by the power of God's love and grace.
              </p> */}
              <p className='mt-3'>
                Kenneth initially arrived to the United States with the purpose of employment at Microsoft where he worked for eleven years and became a Senior Software Engineer. However, the Lord had other plans for him. He called him out of his engineering career to become a full-time church planter. Kenneth is now fully dedicated to extending the kingdom of God. He has acquired a Master of Arts in Christian Studies, and is currently pursuing a Doctorate in Ministry. Kenneth is happily married to Addi and is blessed with two young children.
              </p>
            </div>
          </div>
        </div>
        {/* Edlers */}
        <div className="row">
          <div className="col-3 m-4 mt-5">
            <h2 className="px-4">Elders</h2>
          </div>
        </div>
        <div className="row justify-content-evenly pb-3">
          <div className="col-md-5 col-7 my-2">
            <div className="row justify-content-center">
              <img src={daisy} className="elderphoto" alt="DaisyPhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername">
                Daisy

              </h5>
            </div>
          </div>
          <div className="col-md-5 col-7 my-2">
            <div className="row justify-content-center">
              <img className="elderphoto" src={obed} alt="ObedPhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername">
                Obed

              </h5>
            </div>
          </div>
          <div className="col-md-5 col-7 my-2">
            <div className="row justify-content-center">
              <img className=" elderphoto" src={eddie} alt="EddiePhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername">
                Eddie

              </h5>
            </div>
          </div>
          <div className="col-md-5 col-7 my-2">
            <div className="row justify-content-center">
              <img className=" elderphoto" src={trino} alt="TrinoPhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername">
                Trino

              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
