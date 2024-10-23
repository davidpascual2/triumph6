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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mt-4 mb-2">
            <h1>Leadership</h1>
          </div>
        </div>

        {/* <div className="row ">
          <div className="col-3 col-md-8 ms-4">
            <h2 className="">Pastor</h2>
          </div>
        </div> */}

        {/* <div className="row justify-content-center">
          <div className="col-xl-9 my-5">
            <div className="row justify-content-evenly">
              <div className="col-md-7 col-lg-5 col-10 p-0 d-flex justify-content-center">
                <img src={kenneth} className="pastorphoto img-fluid" alt="KennethPhoto" />
              </div>
              <div className="col-md-7 col-lg-5 col-10 mt-4 mt-lg-0">
                <div className="row">
                  <h3>
                    Kenneth Martinez
                  </h3>
                </div>
                <div className="row">

                  <p className='mt-3'>
                    Kenneth initially arrived to the United States with the purpose of employment at Microsoft where he worked for eleven years and became a Senior Software Engineer. However, the Lord had other plans for him. He called him out of his engineering career to become a full-time church planter. Kenneth is now fully dedicated to extending the kingdom of God. He has acquired a Master of Arts in Christian Studies, and is currently pursuing a Doctorate in Ministry. Kenneth is happily married to Addi and is blessed with two young children.
                  </p>
                </div>
              </div>

            </div>
          </div>


        </div> */}
        {/* Edlers */}
        <div className="row ">
          <div className="col-3 col-md-8 ms-4 mt-4">
            <h2 className="">Elders</h2>
          </div>
        </div>
        <div className="row justify-content-evenly pb-3 px-md-4">

          {/* <div className="col-lg-3 col-md-4 my-2 p-lg-5 p-md-4 ">
            <div className="row justify-content-center p-4 p-md-0">
              <img src={daisy} className="elderphoto" alt="DaisyPhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername ps-4">
                Daisy

              </h5>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-4 my-2 p-lg-5 p-md-4">
            <div className="row justify-content-center p-4 p-md-0">
              <img className="elderphoto" src={obed} alt="ObedPhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername ps-4 ">
                Obed

              </h5>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-4 my-2 p-lg-5 p-md-4">
            <div className="row justify-content-center p-4 p-md-0">
              <img className=" elderphoto" src={eddie} alt="EddiePhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername ps-4">
                Eddie

              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 my-2 p-lg-5 p-md-4">
            <div className="row justify-content-center p-4 p-md-0">
              <img className=" elderphoto" src={trino} alt="TrinoPhoto" />
            </div>
            <div className="row mt-1 justify-content-center">
              <h5 className="eldername ps-4">
                Trino

              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
