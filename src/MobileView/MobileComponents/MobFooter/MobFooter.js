import React, { useState, useEffect } from "react";
import "./MobFooter.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMagazine } from "../../../NewHomepage/redux/actions/Homepage/MagazineAction";
const DailyRead = require("../../../static/img/v-zine-icon.svg");
const Write = require("../../../static/img/write-icon.svg");
const Profile = require("../../../static/img/profile-logo.svg");

const Search = require("../../../static/img/search-footer.svg");

class MobFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollingDown: false,
      lastScrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.props.getMagazine();
  }

  onScroll = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > this.state.lastScrollTop) {
      this.setState({
        scrollingDown: true,
      });
    } else {
      this.setState({
        scrollingDown: false,
      });
    }
    this.setState({
      lastScrollTop: st <= 0 ? 0 : st,
    });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    // let _sourceData = this.props.magazineDatas;

    var DisplayingMagazineData;
    // let MagazineCover = this.props.magazineDatas.file_cover;

    // if (_sourceData) {
    //   DisplayingMagazineData = (
    //     <div>
    //       <a
    //         href="https://flipboard.com/@jitintuli/mental-health-2ukbss5uy?inviteToken=https%3A%2F%2Fflip.it%2FU1WhUA"
    //         target="_blank"
    //       >
    //         <img
    //           src="/static/img/v-zine-icon.svg"
    //           alt="daily-read"
    //           className="v-zine-footer"
    //         />
    //         <p className={this.state.scrollingDown ? "hidden" : "color-black"}>
    //           V-Zine
    //         </p>
    //       </a>
    //     </div>
    //   );
    // } else {
    DisplayingMagazineData = (
      <div>
        <a
          href="https://flipboard.com/@jitintuli/mental-health-2ukbss5uy?inviteToken=https%3A%2F%2Fflip.it%2FU1WhUA"
          target="_blank"
        >
          <img src={DailyRead} alt="daily-read" className="v-zine-footer" />
          <p className={this.state.scrollingDown ? "hidden" : "color-black"}>
            V-Zine
          </p>
        </a>
      </div>
    );
    // }

    return (
      <div className="container-fluid">
        <div
          className={
            this.state.scrollingDown
              ? "footer-container ht-60"
              : "footer-container"
          }
        >
          <div className="footer-mb">
            <div className="daily-read fl-20">
              <Link to="">
                <img
                  src={DailyRead}
                  alt="daily-read"
                  className="daily-read-footer"
                />
                <p
                  className={
                    this.state.scrollingDown ? "hidden" : "color-black"
                  }
                >
                  Daily Read
                </p>
              </Link>
            </div>

            <div className="v-zine fl-20">{DisplayingMagazineData}</div>

            <div className="write-article fl-20">
              <a href="/collection/create/">
                {this.state.scrollingDown ? (
                  <div className="write-footer-sm">
                    <img src={Write} className="write-pen" alt="daily-read" />
                  </div>
                ) : (
                  <div className="write-footer">
                    <img src={Write} className="write-pen" alt="daily-read" />
                  </div>
                )}
              </a>
            </div>

            <div className="profile-icon fl-20">
              {this.props.isAuthenticate ? (
                <Link to="/profile">
                  <img
                    className="profile-logo-footer"
                    src={Profile}
                    alt="search icon"
                  />
                  <p
                    className={
                      this.state.scrollingDown ? "hidden" : "color-black"
                    }
                  >
                    Profile
                  </p>
                </Link>
              ) : (
                <Link to="/login/?next=/profile">
                  <img
                    className="profile-logo-footer"
                    src={Profile}
                    alt="search icon"
                  />
                  <p
                    className={
                      this.state.scrollingDown ? "hidden" : "color-black"
                    }
                  >
                    Profile
                  </p>
                </Link>
              )}
            </div>

            <div
              className="srch-icon-footer fl-20"
              onClick={this.props.searchedClicked}
            >
              <img className="search_footer" src={Search} alt="search icon" />
              <p
                className={this.state.scrollingDown ? "hidden" : "color-black"}
              >
                Search
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    MagazineCover: state.fetchMagazineReducer.magazineCover,
    pdf: state.fetchMagazineReducer.pdf,
    message: state.fetchSubscribe.message,
    isMessage: state.fetchSubscribe.isMessage !== null,
    err: state.fetchSubscribe.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMagazine: () => {
      dispatch(getMagazine());
    },
  };
};

const MobfooterComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobFooter);

export default MobfooterComponent;
