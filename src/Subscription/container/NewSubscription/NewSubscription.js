import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./NewSubscription.css";
import NavbarNew from "../../../NewHomepage/containers/Navbar/NavbarNew";
import NewPackages from "../NewPackages/NewPackages";
import * as actions from "../../../NewHomepage/redux/actions/Subscription/Packages";
import LoadingCards from "../../../NewHomepage/containers/Pages/Homepage/Components/Cards/LoadingCards/LoadingCards";

const NewSubscription = (props) => {
  const productionScripts = () => {
    let paypalScript = document.createElement("script");
    paypalScript.setAttribute(
      "src",
      "https://www.paypal.com/sdk/js?client-id=AfS_vQ-d8zY0Po0sjE-oFw_IscBT5d-hE_8bcint8oipjjltn1CUbhyDNu0KaPnhqoUKxKqKBJkIGCqS"
    );
    document.head.appendChild(paypalScript);
  };

  useEffect(() => {
    props.getSubscriptionPackageAction();
    productionScripts();
    return () => {
      props.getSubscriptionPackageAction();
    };
  }, []);

  return (
    <React.Fragment>
      <NavbarNew isAuthenticate={props.isAuthenticate} />
      <div className="subsContainer">
        <div className="subsContainer__Intro">
          <div className="subsContainer__Intro--content flex-5">
            <h3 className="fnt-700">
              Turn your thoughts into a bouquet of words,
              <br />
              and share them with the world.
            </h3>
            <br />
            <br />
            {props.loading ? (
              <LoadingCards detail />
            ) : (
              <p>
                Don’t just write, but share your wisdom with everyone. Subscribe
                to Vigyaa for{" "}
                {props.subscriptionPackageData.map((data, index) => {
                  if (
                    data.package_detail === "monthly" ||
                    data.package_detail === "Monthly" ||
                    data.package_detail === "monthly package" ||
                    data.package_detail === "Monthly Package"
                  ) {
                    return (
                      <b style={{ letterSpacing: "1px" }} key={index}>
                        {" "}
                        ${data.price}/Month{" "}
                      </b>
                    );
                  }
                  if (
                    data.package_detail === "yearly" ||
                    data.package_detail === "Yearly" ||
                    data.package_detail === "yearly package" ||
                    data.package_detail === "Yearly Package"
                  ) {
                    return (
                      <b style={{ letterSpacing: "1px" }} key={index}>
                        ${data.price}/Year or
                      </b>
                    );
                  } else {
                    return null;
                  }
                })}
                and become a Premium member or Enjoy a plethora of features and
                benefits
              </p>
            )}
          </div>
          <div className="subsContainer__Intro--image flex-5">
            <img
              src="/static/img/subscription_image.jpg"
              alt="vigyaa-creative-image"
            />
          </div>
        </div>
        <h3 className="fnt-700 txt-cntr">Select Your Favorite Package</h3>
        <NewPackages />

        <div className="pkg__alacarte">
          <h3 className="fnt-700">Want Some More offer...</h3>
          <p>Check out our more features specially made for you</p>

          <a href="/my-collections/">
            <div className="pkg__alacarte--btn">Click Here</div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    subscriptionPackageData: state.fetchPackageReducers.subscriptionPackageData,
    BenefitsData: state.fetchPackageReducers.subscriptionBenefitsData,
    error: state.fetchPackageReducers.err,
    loading: state.fetchPackageReducers.loading,
    isAuthenticate: state.fetchAuthReducer.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSubscriptionPackageAction: () => {
      dispatch(actions.getSubscriptionPackageAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSubscription);
