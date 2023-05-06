import React, { useState } from "react";
import Start from "./start";
import Socials from "./socials";
import Footer from "./footer";

function ShowHideDivs() {
  const [showDiv, setShowDiv] = useState("");

  const handleUpClick = (div) => {
    setShowDiv(div);
  };

  const handleDownClick = () => {
    setShowDiv("");
  };

  return (
    <div>
<div className="know_container">
      <div className="know_left">
        <h1>Some of the things you may want to know</h1>
        <h4>We answered questions so you don’t have to ask them.</h4>
      </div>

      <div className="know_right">
        <div
          className="know_right_flex"
          style={{ background: showDiv === "div1" ? "#1A1C1F" : "black" }}
        >
          <h3>Who can sign up to Brass?</h3>
          <div>
            <i
              className="fa fa-chevron-up"
              onClick={() => handleUpClick("div1")}
              style={{ display: showDiv === "div1" ? "none" : "block" }}
            ></i>
            <i
              className="fa fa-chevron-down"
              onClick={handleDownClick}
              style={{ display: showDiv === "div1" ? "block" : "none" }}
            ></i>
          </div>
        </div>

        <div
          className="know_display"
          style={{ display: showDiv === "div1" ? "block" : "none" }}
        >
          We currently only serve registered businesses in Nigeria. We support
          sole traders, NGOs, partnerships and limited liability companies.
          However, If your business is not yet registered, Brass can help you
          get your desired business registered on time with our partners.
        </div>

        <div
          className="know_right_flex"
          style={{ background: showDiv === "div2" ? "#1A1C1F" : "black" }}
        >
          <h3>How much do I pay to sign up at Brass?</h3>
          <div>
            {" "}
            <i
              className="fa fa-chevron-up"
              onClick={() => handleUpClick("div2")}
              style={{ display: showDiv === "div2" ? "none" : "block" }}
            ></i>
            <i
              className="fa fa-chevron-down"
              onClick={handleDownClick}
              style={{ display: showDiv === "div2" ? "block" : "none" }}
            ></i>
          </div>
        </div>
        <div
          className="know_display"
          style={{ display: showDiv === "div2" ? "block" : "none" }}
        >
          You do not pay for signing up for an account at Brass{" "}
        </div>

        <div
          className="know_right_flex"
          style={{ background: showDiv === "div3" ? "#1A1C1F" : "black" }}
        >
          <h3>What do I need to open an account?</h3>
          <div>
            <i
              className="fa fa-chevron-up"
              onClick={() => handleUpClick("div3")}
              style={{ display: showDiv === "div3" ? "none" : "block" }}
            ></i>

            <i
              className="fa fa-chevron-down"
              onClick={handleDownClick}
              style={{ display: showDiv === "div3" ? "block" : "none" }}
            ></i>
          </div>
        </div>
        <div
          className="know_display"
          style={{ display: showDiv === "div3" ? "block" : "none" }}
        >
          You will need government-issued IDs (Including BVN) and your company's
          incorporation documents.{" "}
        </div>
        <div
          className="know_right_flex"
          style={{ background: showDiv === "div4" ? "#1A1C1F" : "black" }}
        >
          <h3>What do I need to open an account?</h3>
          <div>
            <i
              className="fa fa-chevron-up"
              onClick={() => handleUpClick("div4")}
              style={{ display: showDiv === "div4" ? "none" : "block" }}
            ></i>

            <i
              className="fa fa-chevron-down"
              onClick={handleDownClick}
              style={{ display: showDiv === "div4" ? "block" : "none" }}
            ></i>
          </div>
        </div>

        <div
          className="know_display"
          style={{ display: showDiv === "div4" ? "block" : "none" }}
        >
          We have introduced Two factor Authentication(2FA) for an extra level
          of security. This authentication is done using digital OTP apps like
          Google authenticator and Authy instead of hackable channels such as
          the SMS.
        </div>
      </div>
    </div>
    <Start/>
    <Socials/>
    <Footer/>
    </div>
    
  );
}

export default ShowHideDivs;
