import React, { Component } from "react";
import "./Contact.css";
import Abs_Head from "../../Abstract Components/Headlinecontent/Abs_Head";
import icon9 from "../../Assessts/Photos/icon9.png";
import icon10 from "../../Assessts/Photos/icon10.png";
import icon11 from "../../Assessts/Photos/icon11.png";
import icon12 from "../../Assessts/Photos/icon12.png";
import Abs_Button from "../../Abstract Components/AbsButton/Abs_Button";
const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7">
              <Abs_Head title={"CONTACT"} content={"Let’s Have A Chat!"} />
              <p className="contact-para">
                You may contact me by filling in this form any time you need
                professional support or have any questions. You can also fill in
                the form to leave your comments or feedback.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="contact-me-section">
                <div className="contact-innersec d-flex align-items-center">
                  <div className="icon">
                    <img src={icon9} />
                  </div>
                  <div className="text">
                    <h4 className="titletext">Faisalabad, Punjab, Pakistan</h4>
                  </div>
                </div>
                <div className="contact-innersec d-flex align-items-center">
                  <div className="icon">
                    <img src={icon10} />
                  </div>
                  <div className="text">
                    <h4 className="titletext">+92-321-7841926</h4>
                  </div>
                </div>
                <div className="contact-innersec d-flex align-items-center">
                  <div className="icon">
                    <img src={icon11} />
                  </div>
                  <div className="text">
                    <h4 className="titletext">admin@itsmanikhan.com</h4>
                  </div>
                </div>
                <div className="contact-innersec d-flex align-items-center">
                  <div className="icon">
                    <img src={icon12} />
                  </div>
                  <div className="text">
                    <h4 className="titletext">WordPressChampion</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="contact-form">
                    <form>
                        <div>
                            <input className="form-control input-style mb-2 rounded-0 text-start " name="Name" type="text" placeholder="Name"/>
                            <input className="form-control input-style mb-2 rounded-0 text-start" name="Name" type="email" placeholder="E-mail"/>
                            <input className="form-control input-style mb-2 rounded-0 text-start" name="Name" type="text" placeholder="Telephone"/>
                            <textarea type="textarea" placeholder="Message" rows="4" className="form-control rounded-0 mb-3"></textarea>
                        </div>
                        <Abs_Button 
                        title={"Send Message"}
                        />
                    </form>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
