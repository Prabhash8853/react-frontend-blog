import React, { useState, Suspense, useEffect } from "react";
import "./MobileLayout.css";
import MobHome from "../MobilePages/Homepage/Home/MobHome";
import MobFooterComponent from "../../MobileComponents/MobFooter/MobFooter";
import NavbarNew from "../../../NewHomepage/containers/Navbar/NavbarNew";

const MobileLayout = props => {
  return (
    <React.Fragment>
      <NavbarNew isAuthenticate={props.isAuthenticate} />
      <MobHome />
      {props.isAuthenticate && (
        <MobFooterComponent isAuthenticate={props.isAuthenticate} />
      )}
    </React.Fragment>
  );
};

export default MobileLayout;
