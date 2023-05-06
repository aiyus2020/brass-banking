import React from "react";
import Brassbutton from "../button/brassbutton";
const Start = () => {
  return (
    <div className="start_container">
      <h1>Get started for free in 10 minutes</h1>
      <div className="start_p">
      <p>
        Get all the best financial products for your business growth for free.
        Open the last current account you will ever need for your business
      </p>
      </div>
      
      <Brassbutton text="Get started in minutes"
                bck= 'var(--btncol)'
                color="white" />
    </div>
  );
};

export default Start;
