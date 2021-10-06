import React from "react";

import "./Maps.css";

function Maps() {
  return (
    <div className="maps">
      <iframe
        id="maps-id"
        title="AKT Living Academy Basecamp"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.106306293809!2d106.79058681514772!3d-6.249720795476208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f10d429dae6b%3A0x4d3ab9f677cac4b!2sSimply%20Wash%20It%20Laundry%20and%20Ironing%20Services!5e0!3m2!1sen!2sid!4v1571194976567!5m2!1sen!2sid=m&amp;output=embed"
        frameborder="0"
        className="maps-iframe"></iframe>
    </div>
  );
}

export default Maps;
