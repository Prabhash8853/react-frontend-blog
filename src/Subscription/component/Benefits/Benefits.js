import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Benefits.css";
import HeaderName from "../SubscriptionHeader/HeaderName";
import ContinueButton from "../ContinueButton/ContinueButton";
import { getSubscriptionPackageAction } from "../../../NewHomepage/redux/actions/Subscription/Packages";

const Benefits = props => {
  useEffect(() => {
    props.getSubscriptionPackageAction();
    return () => {
      props.getSubscriptionPackageAction();
    };
  }, []);

  return (
    <React.Fragment>
      <div className="benefits__container">
        <div className="bnfts_details">
          <div className="bnfts_header">
            <HeaderName headingName="Benefits" />
          </div>
          <div className="bnfts_data">
            <div className="bnfts_list">
              <ul className="bnfts_ul">
                {props.BenefitsData.map((data, index) => {
                  return (
                    <li className="benefits_list_item" key={index}>
                      {data.benefits}
                    </li>
                  );
                })}
              </ul>
            </div>
            <ContinueButton
              onClick={props.handleScroll}
              btnName="ChoosePackage"
              className="choose_pkg"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    BenefitsData: state.fetchPackageReducers.subscriptionBenefitsData,
    error: state.fetchPackageReducers.err,
    loading: state.fetchPackageReducers.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSubscriptionPackageAction: () => {
      dispatch(getSubscriptionPackageAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Benefits);
