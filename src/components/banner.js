import React from "react";

const Banner = (props) => {
  return (
    <div>
      <marquee>
        <h3>Sample of my work</h3>
      </marquee>

      <img src={props.img} style={{ height: "360px", width: "1200px" }}></img>
    </div>
  );
};

export default Banner;
