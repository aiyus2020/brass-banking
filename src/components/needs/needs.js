import React from "react";
import file from '../brassImg/Rectangle 10.png'

const Needs = () => {
  return (
    <div className="needs_container">
      <div className="needs_heading">
        <h1>Everything you need, less of what you don't.</h1>
      </div>
      <div className="needs_flex">
        <div className="needs_left">
          <div className="Payments">
            <h4>Payments</h4>
            <p>Create instant, scheduled and recurring payments easily</p>
          </div>

          <div className="Invoices">
            <h4>Invoices</h4>
            <p>Send, receive and reconcile invoices all on one platform</p>
          </div>

          <div className="Cashflow ">
            <h4>Cashflow Support</h4>
            <p>
              Move your business forward with insight and financila resources
            </p>
          </div>
          <div className="cross">
            <h4>Cross-platform availability</h4>
            <p>Bank everywhere. Available on iOS, Android and Slack</p>
          </div>

          <div className="team">
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
