import React, { Component } from 'react'
import './Abs_Head.css';
const Abs_Head=(props)=>{
const{title,content}=props;
return(

<>
<h2 className='title'>{title}</h2>
<span className='line'></span>
<h4 className='content'>{content}</h4>
</>


)



}
export default Abs_Head