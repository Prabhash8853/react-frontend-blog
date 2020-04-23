import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./NewPackages.css";
import * as actions from "../../../NewHomepage/redux/actions/Subscription/Packages";
import * as AuthActions from "../../../NewHomepage/redux/actions/AuthActions/AuthAction";
import { withRouter } from "react-router-dom";

const NewPackages = (props) => {
  const [packages, setpackages] = useState();
  const [Loading, setLoading] = useState(false);
  // const [selectedPackage, setselectedPackage] = useState();

  useEffect(() => {
    props.getSubscriptionPackageAction();
    props.onTryAutoSignup();
    return () => {
      props.getSubscriptionPackageAction();
      props.onTryAutoSignup();
    };
  }, []);

  const handleSubscription = (event, id, package_detail, price, valid) => {
    var selectedValue = [];
    selectedValue.push({
      id: id,
      package_detail: package_detail,
      price: price,
      valid: valid,
      username: props.username,
      email: props.email,
    });
    if (props.isAuthenticate) {
      props.history.push({
        pathname: "/Checkout-page",
        state: {
          SelectedPackageData: selectedValue,
        },
      });
    } else {
      alert("Login First");
    }
  };

  return (
    <React.Fragment>
      <div className="pkg">
        <div className="pkg__plan">
          <h3 className="pkg__plan--pkg">Free</h3>
          <h4>$0/Month</h4>
          <h3 className="pkg__plan--heading">
            <b>Benefits</b>
          </h3>
          <ul>
            <li className="pkg__plan--list">Read Unlimited Articles</li>
            <li className="pkg__plan--list">
              Write 5 Articles every month for free.
            </li>
            <li className="pkg__plan--list">
              Get access to Vigyaa Magazine every month.
            </li>
          </ul>
        </div>

        {props.subscriptionPackageData.map((data, index) => {
          return (
            <div
              className={
                data.package_detail === "yearly" ||
                data.package_detail === "Yearly" ||
                data.package_detail === "yearly package" ||
                data.package_detail === "Yearly Package"
                  ? "pkg__plan pkg__plan--recommended"
                  : "pkg__plan"
              }
              key={index}
            >
              {data.package_detail === "yearly" ||
              data.package_detail === "Yearly" ||
              data.package_detail === "yearly package" ||
              data.package_detail === "Yearly Package" ? (
                <div className="pkg__plan--badge">
                  <p>Recommended</p>
                </div>
              ) : null}
              <h3 className="pkg__plan--pkg">{data.package_detail}</h3>
              <h4
                className={
                  data.package_detail === "yearly" ||
                  data.package_detail === "Yearly" ||
                  data.package_detail === "yearly package" ||
                  data.package_detail === "Yearly Package"
                    ? "recommended"
                    : ""
                }
              >
                $ {data.price}{" "}
                {data.package_detail === "monthly" ||
                data.package_detail === "Monthly" ||
                data.package_detail === "monthly package" ||
                data.package_detail === "Monthly Package"
                  ? "/Month"
                  : "/Year"}
              </h4>
              <h3 className="pkg__plan--heading">
                <b>Benefits</b>
              </h3>
              <ul>
                {props.BenefitsData.map((benefit, id) => {
                  return (
                    <li key={id} className="pkg__plan--list">
                      {benefit.benefits}
                    </li>
                  );
                })}
              </ul>
              <button
                className="pkg__plan--button"
                onClick={() =>
                  handleSubscription(
                    data.id,
                    data.package_detail,
                    data.price,
                    data.valid
                  )
                }
              >
                Get Now
              </button>
            </div>
          );
        })}
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
    username: state.fetchPackageReducers.username,
    email: state.fetchPackageReducers.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSubscriptionPackageAction: () => {
      dispatch(actions.getSubscriptionPackageAction());
    },
    onTryAutoSignup: () => {
      dispatch(AuthActions.authCheckState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewPackages));
