import React from "react";
import arroww from '../brassImg/Rectangle 6.svg'
import lock from '../brassImg/Rectangle 7.svg'
import hand from '../brassImg/Rectangle 8.svg'

const Financial = () => {
  return (
    <div className="financial_container">
        <div className="financial_heading" style={{textAlign:"center"}}>
        <h1 style={{paddingBottom:'15px'}}> The complete financial stack for your business</h1 >
      <p>Top-end financial tools to help your business with its financial operations and cash flow.</p>
      <p>We help companies of all types work better, save time and money with a simply better banking service that works.</p>
        </div>
     
      <div className="financial_flex">
        <div className="speed">
          <div className="speed_img bounce-4 " >
            <img src={arroww} alt="speed"/>
          </div>
          <div className="speed_text">
            <h3>
            Speed
            </h3>
            <p>
            Open a commercial-grade current account from anywhere in 10 minutes
            </p>
          </div>
        </div>
        <div className="speed">
        <div className="speed_img bounce-4 " >
            <img src={lock} alt="security"/>
          </div>
          <div className="speed_text">
            <h3>
            Security
            </h3>
            <p>
            Rely on bank-grade security with all your monies fully insured by NDIC
            </p>
          </div>
        </div>
        <div className="speed">
        <div className="speed_img bounce-4 ">
            <img src={hand} alt="support"/>
          </div>
          <div className="speed_text">
            <h3>
            Support
            </h3>
            <p>
            Get access to a trusted support team and resources whenever you want
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
