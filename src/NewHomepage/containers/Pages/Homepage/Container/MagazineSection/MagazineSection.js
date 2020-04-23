import React from "react";
import "./MagazineSection.css";
import { connect } from "react-redux";
import { getMagazine } from "../../../../../redux/actions/Homepage/MagazineAction";
import { SubscribeEmail } from "../../../../../redux/actions/Homepage/subscribeEmailAction";
import StartWriting from "../../../../../components/CommonComponents/StartWriting/StartWriting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoadingCards from "../../Components/Cards/LoadingCards/LoadingCards";

class MagazineSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      MagazineCoverURL: "https://production-california.s3.amazonaws.com/media/",
    };
  }

  componentDidMount() {
    this.props.getMagazine();
  }
  componentWillUnmount() {
    this.props.getMagazine();
  }

  subscribeEmailHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  subscribeHandler = (e) => {
    e.preventDefault();
    this.props.SubscribeEmail(this.state.email);
  };

  render() {
    var DisplayingMagazineData;

    DisplayingMagazineData = (
      <div className="magazine">
        <a
          href="https://flipboard.com/@jitintuli/mental-health-2ukbss5uy?inviteToken=https%3A%2F%2Fflip.it%2FU1WhUA"
          target="_blank"
        >
          <img
            src={this.props.MagazineCover}
            alt="Article Card image"
            height="175"
            srcSet={this.props.MagazineCover}
            sizes="(max-width: 990px) 480w,
                600px"
            alt="magazine"
          />
        </a>
      </div>
    );

    return (
      <div className="magazineSec_container">
        <div className="magazineSec_container-elements">
          <div className="magazineSec_container-magazine">
            {this.props.loading ? (
              <LoadingCards image imgStyle={{ height: "392px" }} />
            ) : null}
            {DisplayingMagazineData}
          </div>
          <div className="magazineSec_container-subscribe">
            {this.props.message ? (
              <div className="subscribe_blck">
                <p className="subscribed-msg">{this.props.message}</p>
              </div>
            ) : (
              <div className="subscribe_blck">
                <div className="subscribe-hd">
                  <p> Never Miss a Story </p>
                </div>
                <div className="subscribe-cntnt">
                  <p>
                    {" "}
                    Sign up for Vigyaa's Daily Digest and get the best of
                    Vigyaa, tailored for you{" "}
                  </p>
                </div>
                <div className="subscribe-inpt">
                  <input
                    className="email-address-input"
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.subscribeEmailHandler}
                  />
                  <div
                    className="get-subscribe"
                    onClick={this.subscribeHandler}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </div>
            )}
          </div>
          <StartWriting />
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
    loading: state.fetchMagazineReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMagazine: () => {
      dispatch(getMagazine());
    },

    SubscribeEmail: (email) => {
      dispatch(SubscribeEmail({ email_id: email }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MagazineSection);
