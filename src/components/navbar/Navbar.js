import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import triumph from '../../assets/logo.001.beige.PNG';
import './navbar.css';
import triumph3 from '../../assets/logo.001.PNG';

export default function CustomNavbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false); // Collapse the navbar by default on each location change
  }, [location]);

  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse the navbar when a navigation link is clicked
  };

  const handleNavbarToggle = () => {
    setExpanded(!expanded); // Toggle the navbar state
  };

  return (
    <>
      <div className="nav container-fluid">
        <header className="header1">
          <Link to="/" className="">
            <img className="triumphLogo ps-3 d-none d-md-flex" src={triumph} alt="tri" />
            <img className="triumphLogo3 ps-3 d-md-none p-0 m-0" src={triumph3} alt="tri" />
          </Link>
        </header>

        <Navbar expand="lg" bg="body-tertiary" className="navcollapse d-flex justify-content-end" expanded={expanded} onToggle={handleNavbarToggle}>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto ">
              <Nav.Link className="d-flex justify-content-end" as={Link} to="/" onClick={handleNavLinkClick}>
                Home
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-end" as={Link} to="/leaders" onClick={handleNavLinkClick}>
                Leaders
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-end" as={Link} to="/contactUs" onClick={handleNavLinkClick}>
                Contact Us
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-end" as={Link} to="/give" onClick={handleNavLinkClick}>
                Give
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
