import React, { useState, useEffect } from "react";
import "./CheckoutPage.css";
import { withRouter } from "react-router-dom";
// import Buttons from "../../../NewHomepage/components/CommonComponents/Buttons/Buttons";
// import ContinueButton from "../../component/ContinueButton/ContinueButton";
import PaypalGateway from "../PaypalGateway/PaypalGateway";

const CheckoutPage = props => {
  const [OrderDate, setOrderDate] = useState("");

  const product = {
    price: props.history.location.state.SelectedPackageData[0]["price"],
    name: props.history.location.state.SelectedPackageData[0]["package_detail"],
    validity: props.history.location.state.SelectedPackageData[0]["valid"]
  };

  useEffect(() => {
    setOrderDate(getOrderDate());
  }, [props.history.location.state]);

  const getOrderDate = () => {
    let currentDate = new Date();
    var monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let OrderDate =
      currentDate.getDate() +
      " " +
      monthName[currentDate.getMonth()] +
      " " +
      currentDate.getFullYear();
    return OrderDate;
  };

  // console.log(product);

  return (
    <div className="checkout_container">
      <div className="checkout_bill_container">
        <h3>Payment Details</h3>
        <div className="checkout">
          <div className="payment-grid">
            <div className="payment-grid-item block">Order Date</div>
            <div className="payment-grid-item color-green">{OrderDate}</div>
            <div className="payment-grid-item block">Username</div>
            <div className="payment-grid-item color-green">
              {props.history.location.state.SelectedPackageData[0]["username"]}
            </div>
            <div className="payment-grid-item block">Email</div>
            <div className="payment-grid-item color-green">
              {props.history.location.state.SelectedPackageData[0]["email"]}
            </div>
            <div className="payment-grid-item block">Subscription</div>
            <div className="payment-grid-item color-green">
              {
                props.history.location.state.SelectedPackageData[0][
                  "package_detail"
                ]
              }
            </div>
            <div className="payment-grid-item block">Total Amount</div>
            <div className="payment-grid-item color-green">
              {"$" +
                props.history.location.state.SelectedPackageData[0]["price"]}
            </div>
          </div>
        </div>

        <div className="payment_continuebtn">
          <PaypalGateway product={product} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(CheckoutPage);
