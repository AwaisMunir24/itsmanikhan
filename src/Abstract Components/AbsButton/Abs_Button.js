import React, { Component } from 'react'
import './Abs_Button.css';
const Abs_Button=(props)=>{
const{title,clicked}=props;
return(

<>
<button className='Button'
onClick={clicked}

>
{title}
</button>

</>


)


}
export default Abs_Button;