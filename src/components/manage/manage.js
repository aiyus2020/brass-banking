import React from "react";
import slack from "../brassImg/Ellipse 4.png";
import quikebook from "../brassImg/Ellipse 1.png";
import sage from "../brassImg/Ellipse 2.png";
import zaiper from "../brassImg/Ellipse 3.png";
const Manage = () => {
  return (
    <div className="manage_container">
      <div className="manage_inner">
        <div><img src={slack} alt="slack" /></div>
        
        <h3>Slack</h3>
        <p>
          Add Brass to your company’s slack to receive real-time notifications,
          send team mate invitations, and generate account statements.
        </p>
      </div>
      <div className="manage_inner">
      <div><img src={quikebook} alt="quickbook" /></div>
        <h3>QuickBooks</h3>
        <p>
        Manage your business finance by sync your invoices and payments with quickbooks.
        </p>
      </div>

      <div className="manage_inner">
      <div><img src={sage} alt="sage"/></div>
        <h3>Sage</h3>
        <p>
        Manage your business cashflow, invoices and activities by sync your account with sage.
        </p>
      </div>
      
      <div className="manage_inner">
      <div><img src={zaiper} alt="zapier"/></div>
        <h3>Zapier</h3>
        <p>
        Connect your Brass account to the thousands of apps on the zapier platform.
        </p>
      </div>
    </div>
  );
};

export default Manage;
