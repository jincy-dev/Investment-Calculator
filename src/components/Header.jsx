import React from "react";
import logo from "../assets/investment-calculator-logo.png";
function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <div>React Investment Calculator</div>
    </header>
  );
}

export default Header;
