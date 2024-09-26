import React from "react";

const Color = ({ color }) => {
  const changeColor = () => {
    console.log("Changed color clicked:", color);
  };

  return (
    <div
      className="color"
      onClick={changeColor}
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
};

export default Color;
