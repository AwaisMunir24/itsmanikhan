import React, { Component } from 'react';
import './Service_Card.css'

const Service_Card=(props)=>{
const {icon,title,para,back_head,back_Para}=props;
return(

<>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={icon} alt="Avatar"/>
      <h3 className='service-title'>{title}</h3>
    <p className='service-para'>{para}</p>
    </div>
    <div className="flip-card-back">
    <h2 className='services-back-title'>{back_head}</h2>
    <p className='service-back-para'>{back_Para}</p>
    </div>
  </div>
</div>







{/* <div className='service-card'>
<div className='card-inner'>
<div className='card-front'>
<img src={icon} />
<h3 className='service-title'>{title}</h3>
<p className='service-para'>{para}</p>
</div>
<div className='card-back'>
<h2>{back_head}</h2>
<p>{back_Para}</p>
</div>
</div>
</div> */}












</>

)

}
export default Service_Card