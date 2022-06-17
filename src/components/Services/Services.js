import React, { useState } from 'react'
import './Services.css';
import icon5 from '../../Assessts/Photos/icon5.png';
import icon6 from '../../Assessts/Photos/icon6.png';
import icon7 from '../../Assessts/Photos/icon7.png';
import icon8 from '../../Assessts/Photos/icon8.png';
import Abs_Head from '../../Abstract Components/Headlinecontent/Abs_Head';
import Service_Card from '../../Abstract Components/Service_Card/Service_Card';


const Servies =()=>{
    
const [data,settdata]=useState(


    [
     {
     icon:icon5,
     title:"eCommerce Development",
     para:"- WooCommerce, Magento, Shopify -",
     backhead:" eCommerce Development",
     backpara:"Looking to sell online? I will develop an eCommerce website for you. The most important piece is that it keeps your customer’s information safe! I can work on any CMS to get the help you increase your online sales."
     },
     {
         icon:icon6,
         title:"Website Design & Development",
         para:"- WooCommerce, Magento, Shopify -",
         backhead:" - WordPress, PHP, Laravel -",
     backpara:" I have vast experience in web application development. I can develop websites by using all cutting- edge technologies. Have a look at my previous work to get an idea.."
     },
     {
        icon:icon7,
         title:"Online Marketing",
         para:" - SEO, SEM, SMM, AdWords -",
         backhead:" Online Marketing-",
         backpara:" Looking to sell online? I will develop an eCommerce website for you. The most important piece is that it keeps your customer’s information safe! I can work on any CMS to get the help you increase your online sales "
     },
     {
         icon:icon8,
         title:"Consulting",
         para:"- E-Commerce Store, Website, Digital Marketing -",
         backhead:"  Consulting",
         backpara:" I have vast experience in web application development. I can develop websites by using all cutting- edge technologies. Have a look at my previous work to get an idea. "
     }
 ] 
 );



return(

<>
<section className='myservies'>
<div className='container-fluid'>
<div className='row'>
<div className='col-lg-12 services-box'>
<Abs_Head
title={"MY SERVICES"}
content={"Stuff I’m Really Good At"}

/>
</div>
</div>
<div className='row'>
{
    data.map((e,idx)=>
    <div className='col-lg-3 col-md-6 col-sm-12 col-width' key={idx}>
        <Service_Card
        icon={e.icon}
        title={e.title}
        para={e.para}
        back_head={e.backhead}
        back_Para={e.backpara}
        
        
        />


    </div>
    
    
    )
}
</div>
<div className='row'>
<p className='quality-para'>I believe that Quality is always better than Quantity,</p>
<p className='quality-para'>and a project is not complete until you are 100% satisfied</p>
</div>
</div>
</section>
</>


)


}
export default Servies