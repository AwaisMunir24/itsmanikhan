import React, { useState } from "react";
import "./Portfolio.css";
import data from "./Data";
import Abs_Button from "../../Abstract Components/AbsButton/Abs_Button";
const Portfolio = () => {
  const [noOfElements, setnoOfElements] = useState(4);
  const loadMore = () => {
    setnoOfElements(noOfElements + noOfElements);
    // console.log("HEllo",noOfElements);
  };
  const[actImg,setActImg]=useState();
  const [pop, setPop] = useState(true);
  const slice = data.cardData.slice(0, noOfElements);
  const viewImage = (id) => {
    let picset = data.cardData.find((img) => img.id === id);
    console.log("new Img",picset);
    setActImg(picset);
    setPop(!pop);
    console.log("setNew Image",actImg)
  };
    console.log("setNew Image",actImg)

  
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="port-heading">PORTFOLIO</h2>
              <span className="line"></span>
              <h4 className="subtitle">Check Out My Recent Projects</h4>
            </div>
          </div>
          <div className="row">
            {slice.map((element, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                  <div className="card p-0 page-port">
                    <div className="img-backside">
                      <img
                        src={element.img}
                        alt={element.name}
                        className="w-100"
                      />
                      <div className="port-backside">
                        <div
                          className="port-circle"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          onClick={() => viewImage(element.id)}
                        >
                          <i className="fa-solid fa-eye"></i>
                        </div>
                      </div>
                    </div>
                    <div className="port-title">
                      <h2 className="port-name">{element.name}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex flex-column align-items-center">
                {slice.length === data.cardData.length ? (
                  ""
                ) : (
                  <>
                    <button className="button-load" onClick={() => loadMore()}>
                      Load More
                    </button>
                  </>
                )}
                <Abs_Button title={"Start a project with me!"} />
              </div>
            </div>
          </div>
        </div>
        {pop ? (
          ""
        ) : (
          <>
                <div
                  className="image_gallary_cover"
                  onClick={() => setPop(!pop)}
                >
                  {" "}
                </div>
                <div className="image_gallary">
                  <div className="image_gallary_img">
                   <img  src={actImg.img} className="h-100 img-fluid" alt="portfolioImg" />
                    
                    <div className="closeimgbox">
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => setPop(!pop)}
                      ></i>
                    </div>
                  </div>
                </div>
              </>
        )}
        <div className=""></div>
      </section>
    </>
  );
};
export default Portfolio;
