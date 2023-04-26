import React, { Component } from "react";
import Hearder_logo from "../brassImg/Rectangle 1.svg";
import Brassbutton from "../button/brassbutton";

export default class Header extends Component {
  render() {
    return (
      <header className="header_container">
        <div className="header_left">
          <div className="header_logo">
            <img src={Hearder_logo} alt="logo"  className="the_logo"/>
          </div>

          <div className="header_left_text">
           
            <p>Industry</p>
            <p>Customers</p>
            <p>Capital</p>
            <p>Company</p>
          </div>
        </div>

        <div className="header_right">
            <div className="right_text">
            <p>Resources</p>
            <p>Login</p>
            </div>
           
            <div>
            <Brassbutton 
            text="Open an account"
                bck= 'var(--btncol)'
                color="white" />
            </div>
           
            
        </div>
      </header>
    );
  }
}
