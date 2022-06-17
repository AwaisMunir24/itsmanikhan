import React from "react";
import "./LookingSome.css";
import Abs_Button from "../../Abstract Components/AbsButton/Abs_Button";
import manikhan from "../../Assessts/Photos/mani-khan.png";
const LookingSome = () => {
  return (
    <>
      <section className="some-about" id="about">
        <div className="looking-someone">
          <div className="contianer-fluid">
            <div className="row">
              <div className="col-lg-6 left-sec col-md-12 col-sm-12">
                <h2>Hi! Looking for someone to build a website for you?</h2>
                <p className="para-1 mb-0">
                  Look no more! I can help to take your business to next level
                  by offering best website development solutions because i know
                  what to do and how to do.
                </p>
                <p className="para-2">
                  When you work with me, you are not working with a broker. As a
                  programmer, I do all of the programming myself. However, in
                  order to meet deadlines, fulfill your needs and exceed
                  expectations, I also work with a team of other professionals
                  if required. We work together to provide a higher quality
                  result for you, the client.
                </p>
                <Abs_Button title={"Contact With Me"} />
              </div>
              <div className="col-lg-6 right-sec col-md-12 col-sm-12">
                <div className="main-wrapper d-flex">
                  <div className="mani-pro-img">
                    <img
                      src={manikhan}
                      alt="manikhan"
                      className="manikhanimg"
                    />
                  </div>
                  <div className="mani-khan-heading d-flex flex-column justify-content-center">
                    <h3>Mani Khan</h3>
                    <h4>WebMaster, Programmer</h4>
                  </div>
                </div>
                <p className="mani-content-1">
                  Hello, and thank you for taking a moment to find out how I can
                  help you!
                </p>
                <p className="mani-content-2">
                  My real name is Abdul Rehman and people know me as Mani Khan,
                  that is my nickname. I am a professional web developer based
                  in Faisalabad, Punjab, Pakistan. I develop modern,
                  user-friendly websites and web apps for any size of business.
                  I also provide cross-platform UI design services.
                </p>
                <p className="mani-content-3">
                  
                 I started freelancing as a front-end developer in 2009. My first
                  project was to build the front-end of an eCommerce store for
                  an Australia-based business. Since then, I have had the
                  opportunity to work with local and international clients
                  alike. I have worked with clients all over the world including
                  the United States, United Kingdom, Canada, Australia, Germany,
                  Spain, Sweden, France, Norway, South Africa, and the United
                  Arab Emirates.
                </p>
                <p className="mani-content-4">
                  WordPress is Oxygen for Me. I know it like the back of my
                  hand. I am also an expert in the following programming
                  languages and techniques: HTML5, CSS3, Bootstrap, JavaScript,
                  jQuery, AJAX, AngularJS, React Native, React, MongoDB,
                  Express.js, Node.js, Redux, PHP & MySQL, Laravel, CodeIgniter,
                  Wix, Shopify, and WooCommerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LookingSome;
