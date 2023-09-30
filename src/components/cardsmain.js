import React from "react";
import "./styles.css";

const Cardsmain = (props) => {
  return (
    <div className="stress">
      <img src={props.img} style={{ height: "240px" }}></img>
      <p style={{ width: "600px" }}>
        <h1>Profile</h1>
        {props.about}
      </p>
      <p>
        {" "}
        <h1>Contact</h1>
        {props.contact}
      </p>
    </div>
  );
};

export default Cardsmain;
