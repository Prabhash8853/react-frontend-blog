import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./AlaCarte.css";
import * as actions from "../../../NewHomepage/redux/actions/Subscription/alaCarteItemsAction";
import ContinueButton from "../../component/ContinueButton/ContinueButton";
import { withRouter } from "react-router-dom";
import NavbarNew from "../../../NewHomepage/containers/Navbar/NavbarNew";
import { getSubscriptionPackageAction } from "../../../NewHomepage/redux/actions/Subscription/Packages";

const AlaCarte = props => {
  const [selectedPackage, setselectedPackage] = useState();
  const [Loading, setLoading] = useState(false);
  const [TotalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    props.getAlaCarteItemsAction();
    props.getSubscriptionPackageAction();
    return () => {
      props.getAlaCarteItemsAction();
    };
  }, []);

  const handleSelectedItem = (id, index) => {
    props.alaCarteItemsData[index].selected = !props.alaCarteItemsData[index]
      .selected;

    const el = document.getElementById("a_la_carte" + id);
    if (props.alaCarteItemsData[index].selected === true) {
      el.classList.add("item_selected");
    } else {
      el.classList.remove("item_selected");
    }

    let selectedValue = [];
    let Price = 0;
    let feature_id = [];
    let selected_ala_carte_items = [];

    props.alaCarteItemsData.map((data, index) => {
      if (data.selected === true) {
        Price += parseInt(data.price);
        feature_id.push(data.id);
        selected_ala_carte_items.push(data.Item);
      }
    });

    selectedValue.push({
      id: feature_id,
      package_detail: selected_ala_carte_items.join(", "),
      price: Price,
      username: props.username,
      email: props.email
    });

    setselectedPackage(selectedValue);
    setTotalPrice(Price);
  };

  const handleroute = () => {
    if (!selectedPackage) {
      alert("Please Select Your A_la_carte Features");
    } else {
      setLoading(true);
      props.history.push({
        pathname: "/Checkout-page",
        state: {
          SelectedPackageData: selectedPackage,
          isAlaCarte: true,
          articleURI: props.location.state.articleURI
        }
      });
    }
  };

  console.log(selectedPackage);

  return (
    <React.Fragment>
      <NavbarNew isAuthenticate={props.isAuthenticate} />
      <div className="al_a_carte_container">
        <div className="al_a_carte_block">
          <h1>A-la-carte</h1>
          <div className="alaCarte_features_block">
            <ul className="al_a_carte_list">
              {props.alaCarteItemsData.map((data, index) => {
                return (
                  <li
                    className="ala_carte_list"
                    key={index}
                    id={"a_la_carte" + data.id}
                    onClick={() => handleSelectedItem(data.id, index)}
                  >
                    <p>{data.Item}</p>
                    <p>{"$" + data.price}</p>
                  </li>
                );
              })}
            </ul>
            <div className="display_alaCarteAmount">
              <p style={{ textAlign: "center" }}>
                <b>Total Amount: {"$" + TotalPrice}</b>
              </p>
            </div>
          </div>

          {Loading ? (
            <ContinueButton
              className="a_ala_carte_btn"
              btnName="Continue to Payment"
              onClick={handleroute}
              Loading={Loading}
            />
          ) : (
            <ContinueButton
              className="a_ala_carte_btn"
              btnName="Continue to Payment"
              onClick={handleroute}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    alaCarteItemsData: state.fetchAlaCarteItems.alaCarteItemsData,
    username: state.fetchPackageReducers.username,
    email: state.fetchPackageReducers.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAlaCarteItemsAction: () => {
      dispatch(actions.getAlaCarteItemsAction());
    },
    getSubscriptionPackageAction: () => {
      dispatch(getSubscriptionPackageAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AlaCarte));
