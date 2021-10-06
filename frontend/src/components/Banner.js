import React from "react";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

import "./Banner.css";

function Banner({ id }) {
  return (
    <div
      className="container up"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/web-asset-greyblock.png)`,
      //   // objectFit: "cover",
      // }}
      id={id}>
      <div className="banner row flex-column-reverse flex-md-row">
        <div className="col-md-7 banner-left">
          <div className="banner-titles">
            <div className="banner-title-div">
              <h1 className="banner-title">SHORT</h1>
            </div>
            <div className="banner-title-div">
              <h1 className="banner-title">COURSE</h1>
            </div>
            <div className="banner-title-div">
              <h1 className="banner-title">FOR TEENAGER</h1>
            </div>
          </div>
          <div className="banner-desc">
            <p className="banner-span">
              Build your own communication skills and abilities
            </p>
            <p className="banner-span">with AKT Living Academy.</p>
          </div>

          {/* <span className="banner-button-text">Explore our programs!</span> */}
          <Link
            to="course"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <div className="banner-button">
              <span className="banner-button-text">Explore our programs!</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="banner-icon-right"
              />
            </div>
          </Link>

          {/* </div> */}
        </div>
        <div className="col-md-5 banner-right">
          <img
            src={"/static/img" + "/web-asset-1.png"}
            alt=""
            className="banner-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
