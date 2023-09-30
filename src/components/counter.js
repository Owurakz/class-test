import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const Increasenum = () => {
    setNumber(number + 1);
  };

  const Decreasenum = () => {
    setNumber(number - 1);
  };

  return (
    <div className="sike">
      <div className="buttc">
        <button className="butt" onClick={Increasenum}>
          Increase
        </button>

        <br />
        <br />

        <button className="butt" onClick={Decreasenum}>
          Decrease
        </button>
      </div>
      <div>
        <h3 className="countbar">Watch me work</h3>
        <h1 className="countbar">{number}</h1>
      </div>
    </div>
  );
};

export default Counter;
