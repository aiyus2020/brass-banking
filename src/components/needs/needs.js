import React from "react";
import file from '../brassImg/Rectangle 10.png'
import { useState } from "react";

const Needs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
      setActiveIndex(index);}
    
  return (
    <div className="needs_container">
      <div className="needs_heading">
        <h1>Everything you need, less of what you don't.</h1>
      </div>
      <div className="needs_flex">
        <div className="needs_left">
          <div className={activeIndex === 0 ? "active" : "myneeds"} onClick={() => handleClick(0)}>
            <h4>Payments</h4>
            <p>Create instant, scheduled and recurring payments easily</p>
          </div>

          <div className={activeIndex === 1 ? "active" : "myneeds"} onClick={() => handleClick(1)}>
            <h4>Invoices</h4>
            <p>Send, receive and reconcile invoices all on one platform</p>
          </div>

          <div className={activeIndex === 2 ? "active" : "myneeds"} onClick={() => handleClick(2)}>
            <h4>Cashflow Support</h4>
            <p>
              Move your business forward with insight and financila resources
            </p>
          </div>
          <div className= {activeIndex === 3 ? "active" : "myneeds"} onClick={() => handleClick(3)}>
            <h4>Cross-platform availability</h4>
            <p>Bank everywhere. Available on iOS, Android and Slack</p>
          </div>

          <div className={activeIndex === 4 ? "active" : ""} onClick={() => handleClick(4)}>
            <h4>Team banking</h4>
            <p>Work with your team to run your entire financial opertations</p>
          </div>
        </div>

        <div className="needs_right">
            <div className="right_container">
                <div className="right_inner">
                    <img src={file} alt="file"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;
