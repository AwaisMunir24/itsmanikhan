import React, { Component } from "react";
import "./SliderItems.css";

const SliderItems = (props) => {
  const { testiicon, testiname, testipara } = props;
  return (
    <>
      <div className="testiimgsec">
        <img src={testiicon} className="testiicon m-auto" alt="icon"/>
      </div>
      <h2 className="testiname">{testiname}</h2>
      <p className="testipara">{testipara}</p>
    </>
  );
};
export default SliderItems;
