import React, { useState } from 'react';
import Abs_Head from '../../Abstract Components/Headlinecontent/Abs_Head';
import icon1 from '../../Assessts/Photos/img1.png';
import icon2 from '../../Assessts/Photos/img2.png';
import icon3 from '../../Assessts/Photos/img3.png';
import icon4 from '../../Assessts/Photos/img4.png';
import icon5 from '../../Assessts/Photos/img5.png';
import icon6 from '../../Assessts/Photos/img6.png';
import './Process.css';
import ProcessContent from '../../Abstract Components/ProcessContent/ProcessContent';

const Process=()=>{

const[process,setProcess]=useState([
{
    processImg:icon1,
    processhead:"1. Discussion",
    processpara:"The first step in creating your website is for you and I to have a conversation about the goals of the website. Once we know the reason you are looking to have a new website, we can work together to identify the content needed and the features that the website should feature."
},
{
    processImg:icon2,
    processhead:"2. Planning",
    processpara:"Once I understand your needs, I will create a plan to design and develop the website to meet your specifications."
},
{
    processImg:icon3,
    processhead:"3. Design",
    processpara:"Functionality on a website is important but a good website design makes a prospective customer want to stay on the website! I will work on the website layout during this stage and take into consideration responsiveness, user-friendly experience and aesthetically pleasing elements."
},
{
    processImg:icon4,
    processhead:"4. Coding",
    processpara:"Building the website on the back-end is the most specialized and timely stage. I pride myself in coding clean and organized. By coding the website properly, it will ensure that you will have a highly functioning website for years to come."
},
{
    processImg:icon4,
    processhead:"5. Testing",
    processpara:"Before making the website live, it is imperative to test it! I test the website internally first, and then show it to my client to test on their end before we launch it. It is important that all of the functionality works and that the site is deployed with no loading errors or bugs"
},
{
    processImg:icon6,
    processhead:"6. Launch",
    processpara:"Once the website has been tested, the final step is to launch the website on your domain and make it public for the world to see! I like to keep long-term relationships with my clients so I hope that you will contact me for future site updates and digital marketing promotions."
},


])    

return(
<>
<section className='process' id='process'>
<div className='container-fluid'>
<div className='row'>
<div className='col-12'>
<Abs_Head
title={"Process"}
content={"6 Short Steps Towards Your Brand New Website"}
/>
</div>
<div className='row'>
{
    process.map((e,idx)=>
    <div className='col-lg-4 col-md-6 col-sm-12 text-center' key={idx}>
            <ProcessContent
            processImg={e.processImg}
            processhead={e.processhead}
            processpara={e.processpara}
            
            
            />
    </div>
    
    
    )
}
</div>
</div>
</div>
</section>
</>

)


}
export default Process