import React from "react";
import girl from "../brassImg/Image.png";
const Support = () => {
  return (
    <div className="support_container">
      <div className="left_support">
        <img src={girl} alt="girl" />
      </div>

      <div className="right_support">
        <p className="support_p">SUPPORT WHEN YOU NEED IT</p>
        <h1>Our support team is your team</h1>
        <p>
          Our support team are a mix of bankers and growth experts ready to help
          you. With a Brass account, you get a team that is genuinely seeking to
          understand your business and provide solutions for its financial
          operations.
        </p>
        <p>
          We are committed to going beyond issue resolution to becoming your
          partner in the growing and smooth running of your business.
        </p>
      </div>
    </div>
  );
};

export default Support;
