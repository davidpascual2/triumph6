import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import triumph from '../../assets/logo.001.beige.PNG';
import './navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="fluidContainerNav container-sm">
        <header className="header1">
          <img className="triumphLogo" src={triumph} alt='tri'/>
        </header>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Triumph</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
            
                        <li className="nav-item">
                            {/* <a class="nav-link" href="#leaders">Leadership</a> */}
                            <Link to='/leaders' className="nav-link" >Leadership</Link>
                        </li>

                        <li className="nav-item">
                            {/* <a class="nav-link" href="#requests">Prayer Requests</a> */}
                            <Link to='/requests' className="nav-link" >Prayer Requests</Link>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
      </div>
    </>
  )
}
