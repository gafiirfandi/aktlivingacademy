import React from "react";

import "./Gallery.css";

function Gallery({ id }) {
  return (
    //  ROW BOOTSTRAP GALLERY

    // <div className="gallery">
    //   <div className="row">
    //     <div className="col-md-4">

    //   <img
    //     src={process.env.PUBLIC_URL + "/web-asset-gallery-1.jpg"}
    //     className="img-collage-large"
    //     alt=""
    //   />
    //     </div>
    //     <div className="col-md-4">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-1.jpg"}
    //         className="img-collage-large"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-4">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-4.jpg"}
    //         className="img-collage-large"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div className="row row-2">
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-5.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-6.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-7.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-8.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    //   <div className="row row-2">
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-9.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-10.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-11.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //     <div className="col-md-3">
    //       <img
    //         src={process.env.PUBLIC_URL + "/web-asset-gallery-12.jpg"}
    //         className="img-collage-small"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>

    // FLEX BOOTSTRAP GALLERY

    <div className="gallery" id={id}>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-4.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-5.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-6.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-7.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-large">
        <img
          src={"/static/img" + "/web-asset-gallery-1.jpg"}
          className="img-collage-large"
          alt=""
        />
      </div>
      <div className="gallery-large">
        <img
          src={"/static/img" + "/web-asset-gallery-2.jpg"}
          className="img-collage-large"
          alt=""
        />
      </div>
      <div className="gallery-large">
        <img
          src={"/static/img" + "/web-asset-gallery-3.jpg"}
          className="img-collage-large"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-8.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-13.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-10.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      <div className="gallery-small">
        <img
          src={"/static/img" + "/web-asset-gallery-11.jpg"}
          className="img-collage-small"
          alt=""
        />
      </div>
      {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) && (
        <div className="gallery-small">
          <img
            src={"/static/img" + "/web-asset-gallery-12.jpg"}
            className="img-collage-small"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
