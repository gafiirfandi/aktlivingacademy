import React, { useEffect, useState } from "react";

import "./NavigationBar.css";
import { Navbar, Col } from "react-bootstrap";
import { Link } from "react-scroll";

function NavigationBar() {
  const [showNavbarShadow, handleShowNavbarShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        handleShowNavbarShadow(true);
      } else handleShowNavbarShadow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <Navbar
      className={`navbar ${showNavbarShadow && "navbar-shadow"}`}
      expand="lg"
      sticky="top">
      <Navbar.Brand href="#home">
        <Link
          className="navbar-item"
          activeClass="active-nav"
          to="banner"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <img
            src={"/static/img/akt-logo.png"}
            width="96.084"
            height="64.404"
            alt=""
            className="navbar-image"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end navbar-items">
        <div className="navbar-item-div">
          <Link
            className="navbar-item"
            activeClass="active-nav"
            to="tentang-kami"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Tentang Kami
          </Link>
        </div>
        <div className="navbar-item-div">
          <Link
            className="navbar-item"
            activeClass="active-nav"
            to="course"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Program
          </Link>
        </div>
        <div className="navbar-item-div">
          <Link
            className="navbar-item"
            activeClass="active-nav"
            to="pengajar"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Pengajar
          </Link>
        </div>
        <div className="navbar-item-div">
          <Link
            className="navbar-item"
            activeClass="active-nav"
            to="pendaftaran"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Pendaftaran Online
          </Link>
        </div>
        <div className="navbar-item-div">
          <Link
            className="navbar-item"
            activeClass="active-nav"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Kegiatan
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
