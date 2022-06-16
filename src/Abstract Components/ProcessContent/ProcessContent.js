import React, { Component } from "react";
import'./ProcessContent.css';

const ProcessContent = (props) => {
    const{processImg,processhead,processpara}=props;
  return <>
  
    <img src={processImg}/>
    <h4 className="processhead">{processhead}</h4>
    <p className="processpara">{processpara}</p>
  
  
  </>;
};
export default ProcessContent;
