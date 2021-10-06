import React, { useState, useEffect } from "react";

import "./TentangKami.css";

function TentangKami({ id }) {
  const [showTentangKami, handleShowTentangKami] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        handleShowTentangKami(true);
      } else handleShowTentangKami(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className="container-fluid" id={id} name="tentang-kami-nama">
      <div className="tentang-kami row">
        <div className="col-md-6 tentang-kami-left">
          <img
            src={"/static/img" + "/web-asset-2.png"}
            alt=""
            className={`tentang-kami-image ${
              showTentangKami ? "show-tentang-kami" : "hide-tentang-kami"
            }`}
          />
        </div>
        <div className="col-md-6 tentang-kami-right">
          <div className="tentang-kami-title-div">
            <h1 className="tentang-kami-title">Tentang Kami</h1>
          </div>
          <div className="tentang-kani-desc">
            <p className="tentang-kami-span">
              AKT Living Academy adalah Lembaga Pendidikan yang didirikan untuk
              menghilangkan hambatan personal dalam berkomunikasi serta
              mengembangkan kemampuan diri remaja.
            </p>
            <p className="tentang-kami-span">
              AKT Living Academy merancang kurikulum khusus untuk usia remaja
              agar sesuai dengan kebutuhan dalam peningkatan soft skills mereka.
            </p>
            <p className="tentang-kami-span">
              AKT Living Academy memiliki komposisi pengajar yang terdiri dari
              80% praktisi dan 20% akademisi.
            </p>
            <div className="yellow-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
