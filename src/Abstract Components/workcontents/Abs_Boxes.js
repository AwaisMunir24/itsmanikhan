import React, { Component } from 'react'
import './Abs_Boxes.css'
const Abs_Boxes=(props)=>{
const{icon,heads,content}=props;

return(

<>
<img src={props.icon}/>
<h2 className='benefit-title'>{props.heads}</h2>
<h4 className='benefits-content'>{props.content}</h4>
</>


)



}
export default Abs_Boxes