import React from "react";
import arrow from "../brassImg/b (3).svg";
import Android from "../brassImg/b (2).svg";
import ampple from "../brassImg/b (1).svg";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_logo_flex">
        <div>
          <img src={arrow} alt="arrow" />
        </div>
        <p>Big starts Small</p>
      </div>

      <p>Available on</p>

      <div className="footer_button">
        <button>
          <img src={Android} alt="andriod" />
          <p>Android</p>
        </button>
        <button>
          <img src={ampple} alt="ampple" />
          <p>iOS</p>
        </button>
      </div>

      <div className="footer_text">
        <p>
          Banking services backed by Bancorp MFB & FCMB and regulated by the
          Central Bank of Nigeria. Brass Technology Nigeria Limited, DBA: Brass
          is a Brass Technologies, Inc company.
        </p>
      </div>
    </div>
  );
};

export default Footer;
