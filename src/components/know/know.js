import React, { useState } from "react";

function ShowHideDivs() {
  const [showDiv, setShowDiv] = useState("");

  const handleUpClick = (div) => {
    setShowDiv(div);
  };

  const handleDownClick = () => {
    setShowDiv("");
  };

  return (
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
            <h3>Who can sign up to Brass?</h3>
            <div> <i
            className="fa fa-chevron-up"
            onClick={() => handleUpClick("div2")}
            style={{ display: showDiv === "div2" ? "none" : "block" }}
          ></i>

          <i
            className="fa fa-chevron-down"
            onClick={handleDownClick}
            style={{ display: showDiv === "div2" ? "block" : "none" }}
          ></i></div>
          
        </div>
        <div className="know_display" style={{ display: showDiv === "div2" ? "block" : "none" }}>
            This is the second div that will be shown or hidden.
          </div>

        <i
          className="fa fa-chevron-up"
          onClick={() => handleUpClick("div3")}
          style={{ display: showDiv === "div3" ? "none" : "block" }}
        ></i>
        <div style={{ display: showDiv === "div3" ? "block" : "none" }}>
          This is the third div that will be shown or hidden.
        </div>
        <i
          className="fa fa-chevron-down"
          onClick={handleDownClick}
          style={{ display: showDiv === "div3" ? "block" : "none" }}
        ></i>

        <i
          className="fa fa-chevron-up"
          onClick={() => handleUpClick("div4")}
          style={{ display: showDiv === "div4" ? "none" : "block" }}
        ></i>
        <div style={{ display: showDiv === "div4" ? "block" : "none" }}>
          This is the fourth div that will be shown or hidden.
        </div>
        <i
          className="fa fa-chevron-down"
          onClick={handleDownClick}
          style={{ display: showDiv === "div4" ? "block" : "none" }}
        ></i>
      </div>
    </div>
  );
}

export default ShowHideDivs;
