import React, { useState } from "react";
import "./WorkWihMe.css";
import Abs_Boxes from "../../Abstract Components/workcontents/Abs_Boxes";
import icon1 from '../../Assessts/Photos/icon1.png';
import icon2 from '../../Assessts/Photos/icon2.png';
import icon3 from '../../Assessts/Photos/icon3.png';
import icon4 from '../../Assessts/Photos/icon4.png';
const WorkWithMe = () => {

const[box,setBox]=useState([
{
   icon:icon1,
   heads:"Innovative",
   content:"I look to enhance my clients’ productivity by providing innovative ideas." 
},
{
    icon:icon2,
    heads:"Prompt",
    content:"My clients’ success is my first priority. I make myself available so that there are no long lag times with our communication."   
},
{
    icon:icon3,
    heads:"Creative",
    content:"I love to go beyond the website norms and showcase my clients with a creative approach."
},
{
    icon:icon4,
    heads:"Smart",
    content:"I keep up-to-date with new information in the field. I continue to educate myself on the ever-changing world of technology."
}
])

  return (
    <>
      <section className="benefits-sections">
        <div className="workwithme">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 left-side text-center">
                <div className="col-lg-12">
                  <h2 className="heading">BENEFITS</h2>
                  <span className="line"></span>
                  <h4 className="subhead">Why Work With Me</h4>
                </div>
                <div className="row">
                {
                    box.map((e,idx)=>
                    <div className="col-lg-6 col-md-6 col-sm-12" key={idx}>
                        <Abs_Boxes
                        icon={e.icon}
                        heads={e.heads}
                        content={e.content}
                        />

                    </div>
                    
                    
                    )
                }
            </div>
              </div>
              <div className="col-lg-6 benefit-img">
                    <div className="pc_img"></div>
              </div>
            </div>
            
       
          </div>
        </div>
      </section>
    </>
  );
};
export default WorkWithMe;
