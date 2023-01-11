import React from "react";
import { ToastContainer } from "react-toastify";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header>
    <ToastContainer/>
     <NavMobile/>
     <NavDesktop/>
    </header>
  );
};

export default Header;
