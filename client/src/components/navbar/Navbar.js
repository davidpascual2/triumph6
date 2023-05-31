import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import triumph from '../../assets/logo.001.beige.PNG';
import './navbar.css';
import triumph3 from '../../assets/logo.001.PNG';

export default function Navbar() {
  return (
    <>
      <div className="nav container-fluid">

        <header className="header1">
          <Link to="/" className=''>
            <img className="triumphLogo ps-3 d-none d-md-flex" src={triumph} alt='tri' />
            <img className="triumphLogo3 ps-3 d-md-none p-0 m-0" src={triumph3} alt='tri' />
          </Link>
        </header>

        <nav class="navbar navbar-expand-lg bg-body-tertiary navcollapse">
          <div class="container-fluid d-flex justify-content-end">
            {/* <a class="navbar-brand" href="#">Triumph</a> */}

            <button class="navbar-toggler d-flex justify-content-end text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link text-end " aria-current="page" href="#">Home</Link>
                </li>

                <li className="nav-item">
                  <Link to='/leaders' className="nav-link text-end " >Leaders</Link>
                </li>

                <li className="nav-item">
                  <Link to='/contactUs' className="nav-link text-end " >Contact Us</Link>
                </li>

                <li className="nav-item">
                  <Link to='/give' className="nav-link text-end " >Give</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
