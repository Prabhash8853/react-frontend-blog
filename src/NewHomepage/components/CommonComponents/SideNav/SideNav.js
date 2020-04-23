import * as React from "react";
import "./SideNav.css";
import Buttons from "../Buttons/Buttons";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import { Link } from "react-router-dom";

class SideNav extends React.Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push({
      pathname: "/api/accounts/logout/",
    });
    window.location.reload();
  };
  render() {
    let drawerClasses = "side-nav";
    if (this.props.show) {
      drawerClasses = "side-nav open";
    }
    return (
      <nav className={drawerClasses}>
        <div className="sideNav_content">
          {this.props.isAuthenticate ? null : (
            <Buttons
              className="logoutMobile_btn"
              btnName="Login"
              href="/login"
            />
          )}
          {localStorage.getItem("__vig__mod_1") ? (
            <Link to="/subscription">
              <div className="nav_content  become_member_dtp">
                Become Member
              </div>
            </Link>
          ) : (
            <Link to="/login/?next=/subscription">
              <div className="nav_content  become_member_dtp">Upgrade Now</div>
            </Link>
          )}
          {localStorage.getItem("__vig__mod_1") ? (
            <Link to="/profile">
              <div className="nav_content">My Collections</div>
            </Link>
          ) : (
            <Link to="/login/?next=/profile">
              <div className="nav_content">My Collections</div>
            </Link>
          )}
          <Link to="/category-list">
            <div className="nav_content">Category</div>
          </Link>
          <a href="../api/api/about-us/">
            <div className="nav_content">About Us</div>
          </a>

          <a href="../api/contact-us/">
            <div className="nav_content">Contact Us</div>
          </a>
          <Link to="/privacy-and-policy">
            <div className="nav_content">Privacy Policy</div>
          </Link>
          <div className="nav_content">
            <Link to="/terms-and-conditions/">Terms & Conditions</Link>
          </div>
          {this.props.isAuthenticate ? (
            <Buttons
              className="logoutMobile_btn"
              btnName="Sign Out"
              href="/login"
              click={this.handleLogout}
            />
          ) : null}
          <div className="copyright">
            <p>{"\u00a9"} Copyright 2018-2019. All Rights Reserved</p>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(SideNav);
