import React from "react";

import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-3 footer-start">
          <img
            src={"/static/img" + "/akt-logo-footer.png"}
            alt=""
            className="footer-logo"
          />
        </div>
        <div className="col-md-3 footer-alamat footer-column footer-text">
          <p>Jl. Pela Raya No. 78A</p>
          <p>Kebayoran Baru</p>
          <p>Jakarta Selatan</p>
          <p>Tlp : (021) 27088035</p>
          <p>Wa : 081927088036</p>
        </div>

        <div className="col-md-3 footer-waktu-buka footer-column footer-text">
          <p>Senin s/d Jumat</p>
          <p>Pukul 08.30am - 06.00pm</p>
          <br />
          <p>Sabtu</p>
          <p>Pukul 08.30am - 03.00pm</p>
        </div>

        <div className="col-md-3 footer-end footer-column footer-text">
          <p>Ikuti kami di</p>
          <div className="footer-logos">
            <div className="logo">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="logo">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="logo">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <p>© Copyright 2019 AKTLivingAcademy All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
