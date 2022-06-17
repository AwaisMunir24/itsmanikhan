import React, { useState } from "react";
import "./Testimonials.css";
import Abs_Head from "../../Abstract Components/Headlinecontent/Abs_Head";
import test1 from "../../Assessts/Photos/testimonial1.jpg";
import test2 from "../../Assessts/Photos/testimonial2.jpg";
import test3 from "../../Assessts/Photos/testimonial3.jpg";
import test4 from "../../Assessts/Photos/testimonial4.jpg";
import SliderItems from "../../Abstract Components/SliderITtems/SliderItems";

import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [testContent, setTestContent] = useState([
    {
      testiicon: test1,
      testiname: "Monica Pepe",
      testipara:
        "Mani has gone above and beyond to resolve problems on a website. He is smart and doesn’t quit! A very hard worker who I will continue to work with for all my future needs. He knows many things and is a hard worker. Great problem solver!!!",
    },
    {
      testiicon: test2,
      testiname: "Gabriel Lowe",
      testipara:
        "Perfect. Exactly what I needed! Looking forward to future projects! Thanks so much!",
    },
    {
      testiicon: test3,
      testiname: "Kevin Friedman",
      testipara:
        "This job was tough for me to understand, not for him! did exactly what i was looking for! the communication by him was stellar!",
    },
    {
      testiicon: test4,
      testiname: "Murad Hamidi",
      testipara:
        "Sincerely the best web developer ever! He does all what we wanted even far better. He is the best WordPress and WooCommerce engineer that we have been working with. It is sincerely a pleasure to rely on his expertise and skills. Thanks.",
    },
  ]);

  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 test-left-side">
              <Abs_Head
                title={"TESTIMONIALS"}
                content={"What Clients Say About Me"}
              />
              <div>
                <Slider {...settings}>
                  {testContent.map((e, idx) => (
                    <div key={idx} className="text-center">
                      <SliderItems
                        testiicon={e.testiicon}
                        testiname={e.testiname}
                        testipara={e.testipara}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="col-lg-6 testi-imagess"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
