import React, { useState, useEffect } from "react";
import "./NavLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../../../../components/CommonComponents/Buttons/Buttons";
import SearchBar from "../SearchBar/SearchBar";
import { Link, Redirect, withRouter } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

const NavLinks = (props) => {
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const __vig__mod_1 = localStorage.getItem("__vig__mod_1");
    if (__vig__mod_1) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    props.history.push({
      pathname: "/api/accounts/logout/",
    });
    window.location.reload();
  };

  return (
    <React.Fragment>
      <div className="navLinks_container flex-10 txt-rt">
        <ul className="navlinks_ul">
          <li>
            <SearchBar />
          </li>
          <li className="upgrade_button">
            {Authenticated ? (
              <Link to="/subscription">Become Member</Link>
            ) : (
              <Link to="/login/?next=/subscription">Upgrade Now</Link>
            )}
          </li>
          <li className="nav_btns">
            {Authenticated ? (
              <Buttons btnName="Sign Out" href="/login" click={handleLogout} />
            ) : (
              <Buttons btnName="Login" href="/login" />
            )}
          </li>
          <li>
            {Authenticated ? (
              <NavButton
                btnName="Start Writing"
                href="../api/collection/create/"
              />
            ) : (
              <NavButton
                btnName="Start Writing"
                href="../api/collection/create/temp/"
              />
            )}
          </li>
          {/* <li>
            <FontAwesomeIcon icon={faBell} />
          </li> */}
          <li className="sideNav_open" onClick={props.openSideNav}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default withRouter(NavLinks);
