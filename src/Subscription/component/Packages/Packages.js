import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Packages.css";
import { withRouter } from "react-router-dom";
import { getSubscriptionPackageAction } from "../../../NewHomepage/redux/actions/Subscription/Packages";

import ContinueButton from "../ContinueButton/ContinueButton";

const Packages = props => {
  const [packages, setpackages] = useState();
  const [Loading, setLoading] = useState(false);
  const [selectedPackage, setselectedPackage] = useState();

  useEffect(() => {
    props.getSubscriptionPackageAction();

    return () => {
      props.getSubscriptionPackageAction();
    };
  }, []);

  const handlePackageSelected = (id, name) => {
    // console.log(props.subscriptionPackageData);
    // props.subscriptionPackageData[id].selected = !props.subscriptionPackageData[
    //   id
    // ].selected;

    // if (props.subscriptionPackageData[id].slected === true) {
    //   setselectedPackage(props.subscriptionPackageData[id]);
    // }

    // props.subscriptionPackageData[id];

    const selectedValue = [];

    setpackages(
      props.subscriptionPackageData.map((data, index) => {
        if (index === id) {
          data.selected = !data.selected;

          selectedValue.push({
            id: data.id,
            package_detail: data.package_detail,
            price: data.price,
            valid: data.valid
          });
          setselectedPackage(selectedValue);
        } else {
          data.selected = false;
        }
        return { ...data };
      })
    );
  };

  const handleContinuePayment = () => {
    if (selectedPackage) {
      setLoading(true);
      setTimeout(() => {
        props.history.push({
          pathname: "/Checkout-page/",
          state: {
            SelectedPackageData: selectedPackage
          }
        });
      }, 3000);
    } else {
      window.alert("Select Package First");
    }
  };

  return (
    <React.Fragment>
      <div className="pkg_container" ref={props.pkgRef}>
        <div className="pkg_details">
          <div className="pkg_header">
            <h3>Choose Your Package</h3>
          </div>
          <div className="pkg_list pd_tp_10">
            {props.subscriptionPackageData.map((data, index) => {
              return (
                <React.Fragment>
                  <div
                    className="packages_data"
                    key={index}
                    onClick={() => handlePackageSelected(index, data.name)}
                  >
                    <div className="checkbox">
                      {data.selected ? (
                        <div className="check icon">
                          <img src="/static/img/check.svg" alt="true" />
                        </div>
                      ) : (
                        <div className="box"></div>
                      )}
                    </div>
                    <div className="packages key">
                      <h5>{data.package_detail + " Package"}</h5>
                      <p>
                        {data.package_detail === "yearly" ||
                        data.package_detail === "Yearly"
                          ? "$" + data.price + " /Year"
                          : "$" + data.price + " /Month"}
                      </p>
                    </div>
                  </div>
                  <div className="ruler_pkg"></div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        {Loading ? (
          <ContinueButton
            btnName="Continue"
            className="continue_btn"
            onClick={handleContinuePayment}
            Loading={Loading}
          />
        ) : (
          <ContinueButton
            btnName="Continue"
            className="continue_btn"
            onClick={handleContinuePayment}
          />
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    subscriptionPackageData: state.fetchPackageReducers.subscriptionPackageData,
    error: state.fetchPackageReducers.err,
    loading: state.fetchPackageReducers.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSubscriptionPackageAction: () => {
      dispatch(getSubscriptionPackageAction);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Packages));
