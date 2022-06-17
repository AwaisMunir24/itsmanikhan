import React from "react";
import "./Abs_Boxes.css";
const Abs_Boxes = ({ icon, heads, content }) => {
  return (
    <>
      <img src={icon} alt="icon" />
      <h2 className="benefit-title">{heads}</h2>
      <h4 className="benefits-content">{content}</h4>
    </>
  );
};
export default Abs_Boxes;
