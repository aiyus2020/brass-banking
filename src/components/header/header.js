import React, { Component } from "react";
import Hearder_logo from "../brassImg/Rectangle 1.svg";

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
            <p>Resources</p>
            <p>Login</p>
            <button>button</button>
        </div>
      </header>
    );
  }
}
