import React, { useState, useEffect } from "react";

import "./Pengajar.css";

function Pengajar({ nama, imageURL, desc, exp }) {
  const [showPengajar, handleShowPengajar] = useState(false);
  const [activeDesc, handleActiveDesc] = useState([1, 0]);

  // constActiveDesc = (col_number) => {
  //   if (col_number == 0) {
  //     ha
  //   }
  // };

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 2420) {
          handleShowPengajar(true);
        } else handleShowPengajar(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 1850) {
          handleShowPengajar(true);
        } else handleShowPengajar(false);
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }
  }, []);

  return (
    <div className="row pengajar">
      <div className="col-md-6 pengajar-left">
        <img
          src={"/static/img" + "/" + imageURL}
          alt=""
          className={`pengajar-image ${showPengajar && "show-pengajar"}`}
        />
      </div>
      <div className="col-md-6 pengajar-right">
        <div className="pengajar-navigation">
          <div className="pengajar-profile">
            <div className="pengajar-center">
              <h3
                className={`pengajar-nav-item ${
                  activeDesc[0] == 1 && "active-nav"
                }`}
                onClick={() => handleActiveDesc([1, 0])}>
                Profile
              </h3>
              <div
                className={`pengajar-dot ${
                  activeDesc[0] == 1 && "active"
                }`}></div>
            </div>
          </div>
          <div className="pengajar-experience">
            <div className="pengajar-center">
              <h3
                className={`pengajar-nav-item ${
                  activeDesc[1] == 1 && "active-nav"
                }`}
                onClick={() => handleActiveDesc([0, 1])}>
                Experience
              </h3>
              <div
                className={`pengajar-dot ${
                  activeDesc[1] == 1 && "active"
                }`}></div>
            </div>
          </div>
          {/* <div className="pengajar-skills">
            <div className="pengajar-center">
              <h3
                className={`pengajar-nav-item ${
                  activeDesc[2] == 1 && "active-nav"
                }`}
                onClick={() => handleActiveDesc([0, 0, 1])}>
                Skills
              </h3>
              <div
                className={`pengajar-dot ${
                  activeDesc[2] == 1 && "active"
                }`}></div>
            </div>
          </div> */}
        </div>
        {activeDesc[0] == 1 ? (
          <div className="pengajar-info">
            <h5 className="pengajar-introduction">- Introduction</h5>
            <h4 className="pengajar-nama">{nama}.</h4>
            <p className="pengajar-desc">{desc}</p>
          </div>
        ) : (
          <div className="pengajar-info">
            <h5 className="pengajar-introduction">- Experience</h5>
            <h4 className="pengajar-nama">{nama}.</h4>
            <p className="pengajar-desc">{exp}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pengajar;
