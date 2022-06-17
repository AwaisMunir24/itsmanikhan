import React, { Component } from "react";
import bgvideo from "../../Assessts/video/Source-Code-4733.733e41a86724ba124249.mp4";
import maniImg from "../../Assessts/Photos/mani-khan.png";
import "./Home.css";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <>
      <section className="Home" id="home">
      <div className="overlay-color"></div>
      <video controls loop autoPlay muted className="video-bg">
        <source src={bgvideo} type="video/mp4" />
      </video>

      <div className="container-fluid home-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="home-section-syle">
              <div className="into">
                <div className="image">
                  <img src={maniImg} alt="manikhan" />
                </div>

                <div className="about-me">
                  <h2 className="aboutmetitle">Hello! I'm Mani Khan</h2>
                  <p>Professional web master with 11+ years of experience</p>
                </div>
              </div>
              <div className="smartwebsolution">
                <h1 className="maintitle"> smart web solutions</h1>
                <h2 className="maindec">
                  For your personal & commercial projects
                </h2>
                <p className="discription">
                  Grow your business, connect with your audience and show them
                  who YOU are through MY quality website development services.
                </p>

                <div className="d-flex">
                  <Link to="portfolio">
                    <button className="view-my-portfolio">
                      View My Portfolio
                    </button>
                  </Link>
                  <Link to="contact">
                    <button className="discuss-your-project">
                      Discuss Your Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Home;
