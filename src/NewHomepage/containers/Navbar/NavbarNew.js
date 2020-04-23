import React, { useState } from "react";
import "./NavbarNew.css";
import LogoNew from "./Components/LogoNew/LogoNew";
// import SearchBar from "./Components/SearchBar/SearchBar";
import NavLinks from "./Components/NavLinks/NavLinks";
import SliderTop from "./Container/SliderTop/SliderTop";
import SideNav from "../../components/CommonComponents/SideNav/SideNav";
import Backdrop from "../../components/CommonComponents/Backdrop/Backdrop";

const NavbarNew = props => {
  const [sideNav, setsideNav] = useState(false);
  let backdrop;

  const openSideNav = () => {
    setsideNav(true);
  };

  const backdropClickHandler = () => {
    setsideNav(false);
  };
  if (sideNav) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <React.Fragment>
      <div className="nav_contain">
        <div className="navbar_container">
          <LogoNew />

          {/* Search bar in Navmenu. Open SearchBar.tsx component */}

          <div className="navbar_elements_conatiner flex-10">
            <div className="navbar_elements">
              <NavLinks
                openSideNav={openSideNav}
                isAuthenticate={props.isAuthenticate}
              />
            </div>
          </div>
        </div>
        {!props.hideSliderTop && <SliderTop />}
      </div>
      <SideNav show={sideNav} isAuthenticate={props.isAuthenticate} />
      {backdrop}
    </React.Fragment>
  );
};

export default NavbarNew;
