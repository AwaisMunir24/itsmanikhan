import React, { useState } from "react";
import "./Header.css";
import menubars from "../../Assessts/Photos/bugicon.PNG";
import headerlogo from "../../Assessts/Photos/navbar-white-foot-logo.png";
import { MenuData } from "./Menudata";
import navlogo from "../../Assessts/Photos/navbar-logo.png";
import { MobileData } from "./Mobiledata";

const Header = () => {
  const [Toogle, setToogle] = useState(false);

  const handleToggle = () => {
    setToogle(!Toogle);
    console.log("hello");
  };

  return (
    <>
      <header className="header">
        <div className="menu">
          <div className="upper-icon">
            <div className="icon-bar" onClick={handleToggle}>
              {Toogle ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <img src={menubars} />
              )}
            </div>

            <div
              className={
                Toogle ? "navigateion-desktop    " : "navigateion-desktop show"
              }
            >
              <div
                className=" desktopmenu"
                style={{ right: Toogle ? "0" : "-400px" }}
              >
                <div className="logo">
                  <img src={navlogo} alt="logo" className="img-fluid" />
                </div>
                <div className="menu-lists">
                  <ul>
                    {MenuData.map((e,idx) => (
                      <>
                        <li className="nav-item" key={idx}>
                          <a
                            to={e.path}
                            className={e.classname}
                            onClick={handleToggle}
                          >
                            {e.name}
                          </a>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-icon">
            <img src={headerlogo} className="img-fluid" alt="Logo" />
          </div>
        </div>

        <div className="mobile-view">
          <div className="left-side-nav" >
            <img src={headerlogo} alt="logo" className="img-fluid" />
          </div>
          <div className="right-right-nav" onClick={handleToggle}>
          {Toogle ? (<i className="fa-solid fa-xmark closebtn" ></i>):(<img src={menubars} className="img-fluid"/>)}
          </div>
          <div
              className={
                Toogle ? "mobile-navigate    " : "navigateion-desktop show"
              }
            >
              <div
                className=" mobilemenu"
                style={{ right: Toogle ? "0px" : "-400px" }}
              >
                <div className="logo">
                  <img src={navlogo} alt="logo" className="img-fluid" />
                </div>
                <div className="menu-lists">
                  <ul>
                  {MobileData.map((e,idx) => (
                <>
                  <li className="nav-item" key={idx}>
                    <a
                      to={e.path}
                      className={e.classname}
                      onClick={handleToggle}
                    >
                      {e.name}
                    </a>
                  </li>
                </>
              ))}
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </header>
    </>
  );
};
export default Header;
