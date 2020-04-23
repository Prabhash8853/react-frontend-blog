import React, { useState } from "react";

import "./PaymentReciept.css";
import { handleDate } from "../../../utility/DateTitle/DateTitle";
// import ContinueButton from "../../component/ContinueButton/ContinueButton";

const PaymentReciept = props => {
  const handlePrint = () => {
    window.print();
  };

  const handleDate = date => {
    let PaymentDate = new Date(date);
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
    let PaymentDoneDate =
      monthName[PaymentDate.getUTCMonth()] +
      " " +
      PaymentDate.getUTCDate() +
      " " +
      PaymentDate.getUTCFullYear();
    return PaymentDoneDate;
  };

  const handleSubscriptionEndDate = date => {
    var now = new Date(date);
    now.setDate(
      now.getDate() +
        parseInt(
          props.location.state.subscriptionData.SelectedPackageData[0]["valid"]
        )
    );
    let SubscriptionEndDate = handleDate(now);
    return SubscriptionEndDate;
  };

  return (
    <div className="payment_rct_pg">
      <div className="payment_rct_container">
        <div className="payment_rct">
          <h3 style={{ textAlign: "center" }}>Receipt</h3>
          <div className="payment_data">
            <div className="payment_header flex-10">
              <p style={{ fontSize: "14px", lineHeight: "1.5em" }}>
                <b style={{ fontSize: "24px" }}>Congratulations!</b>
                <br /> Now, you are a part of the Vigyaa family
              </p>
            </div>
            <div className="payment_logo">
              <img src="/static/img/vigyaa-logo-home.svg" alt="logo" />
            </div>
          </div>

          <div className="payment_rct_body grid_container">
            <div className="grid color_lightGrey">
              <p>Order No.</p>
            </div>
            <div className="grid color_black text-right">
              <p>{props.location.state.paymentUserDetails.id}</p>
            </div>
            <div className="grid color_lightGrey">
              <p>Date</p>
            </div>
            <div className="grid color_black text-right">
              <p>
                {handleDate(
                  props.location.state.paymentUserDetails.create_time
                )}
              </p>
            </div>
            <div className="grid color_lightGrey">
              <p>Received From</p>
            </div>
            <div className="grid color_black text-right">
              <p>
                {
                  props.location.state.subscriptionData.SelectedPackageData[0]
                    .username
                }
              </p>
            </div>
            <div className="grid color_lightGrey">
              <p>User Email</p>
            </div>
            <div className="grid color_black text-right">
              <p>
                {
                  props.location.state.subscriptionData.SelectedPackageData[0]
                    .email
                }
              </p>
            </div>
          </div>

          {/*  receipt ruler data */}

          {props.history.location.state.subscriptionData.SelectedPackageData[0]
            .valid ? (
            <React.Fragment>
              <span className="ruler" style={{ margin: "10px 0" }}></span>
              <div className="grid_container">
                <div className="grid date ">
                  <h5>
                    <p
                      className="from_date color_lightGrey fnt_16"
                      style={{ marginBottom: 0 }}
                    >
                      From
                    </p>
                    {handleDate(
                      props.location.state.paymentUserDetails.create_time
                    )}
                  </h5>
                </div>
                <div className="grid text-right date ">
                  <h5>
                    <p
                      className="to_date color_lightGrey fnt_16"
                      style={{ marginBottom: 0 }}
                    >
                      To
                    </p>
                    {handleSubscriptionEndDate(
                      props.location.state.paymentUserDetails.create_time
                    )}
                  </h5>
                </div>
              </div>

              <span className="ruler" style={{ margin: "10px 0" }}></span>
            </React.Fragment>
          ) : null}

          {/*  below ruler data */}

          <div className="payment_rct_body grid_container">
            <div className="grid color_lightGrey">
              <p>For Payment Of</p>
            </div>
            <div className="grid color_black text-right">
              <p>
                {
                  props.history.location.state.subscriptionData
                    .SelectedPackageData[0].package_detail
                }{" "}
              </p>
            </div>
            <div className="grid color_lightGrey">
              <p>Amount Paid</p>
            </div>
            <div className="grid color_black text-right">
              <p>
                {props.location.state.paymentUserDetails.purchase_units[0]
                  .amount["value"] +
                  " " +
                  props.location.state.paymentUserDetails.purchase_units[0]
                    .amount["currency_code"]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="btns">
        <a href="/">
          <div
            className="btn btn-homePage"
            style={{ backgroundColor: "#E68174", color: "white" }}
          >
            Go To Homepage
          </div>
        </a>
        <div
          className="btn btn-homePage"
          style={{ backgroundColor: "#677B00", color: "white" }}
          onClick={handlePrint}
        >
          Print the Bill
        </div>
      </div>
    </div>
  );
};

export default PaymentReciept;
