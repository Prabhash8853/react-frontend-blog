import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./PaypalGateway.css";
import ContinueButton from "../../component/ContinueButton/ContinueButton";
import { withRouter } from "react-router-dom";
import * as actions from "../../../NewHomepage/redux/actions/Subscription/PostSubscriptionData";
import { PostALaCarteItemAction } from "../../../NewHomepage/redux/actions/Subscription/PostALaCarteItemAction";

const PaypalGateway = props => {
  const [paidFor, setpaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const [paymentUserDetails, setPaymentUserDetails] = useState();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: props.product.description,
                amount: {
                  currency_code: "USD",
                  value: props.product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setpaidFor(true);
          setPaymentData(data);
          const orderData = order;
          setPaymentUserDetails(orderData);
          hitAPI(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        }
      })
      .render("#render_paypal");
  }, [props.product.description, props.product.price]);

  const handleRoute = () => {
    setLoading(true);
    setTimeout(() => {
      props.history.push({
        pathname: "/paymentReceipt",
        state: {
          paymentData,
          paymentUserDetails,
          subscriptionData: props.location.state
        }
      });
    }, 2000);
  };

  const hitAPI = order => {
    if (props.location.state.isAlaCarte) {
      props.PostALaCarteItemAction(order, props.location.state);
    } else {
      props.postSubscriptionData(order, props.location.state);
    }
  };

  if (paidFor) {
    return (
      <React.Fragment>
        {Loading ? (
          <ContinueButton
            btnName="Generate Bill"
            className="continue_btn"
            onClick={handleRoute}
            Loading={Loading}
          />
        ) : (
          <ContinueButton
            btnName="Generate Bill"
            className="continue_btn"
            onClick={handleRoute}
          />
        )}
      </React.Fragment>
    );
  }

  console.log(props.product);

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {props.error}</div>}
      <div id="render_paypal" className="paypal_btn" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    postsubscriptionData: state.postsubscriptionData.postsubscriptionData,
    error: state.postsubscriptionData.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postSubscriptionData: (order, packageDetails) => {
      dispatch(
        actions.PostSubscriptionDataAction({
          order_id: order.id,
          package_id: packageDetails.SelectedPackageData[0].id,
          payer_id: order.payer.payer_id,
          value: order.purchase_units[0].amount.value,
          country_code: order.purchase_units[0].shipping.address.country_code,
          first_name: order.payer.name.given_name,
          last_name: order.payer.name.surname,
          email: order.payer.email_address,
          currency_code: order.purchase_units[0].amount.currency_code,
          merchant_id: order.purchase_units[0].payee.merchant_id
        })
      );
    },
    PostALaCarteItemAction: (order, packageDetails) => {
      dispatch(
        PostALaCarteItemAction({
          order_id: order.id,
          alacarte_ids: { id: packageDetails.SelectedPackageData[0].id },
          payer_id: order.payer.payer_id,
          value: order.purchase_units[0].amount.value,
          country_code: order.purchase_units[0].shipping.address.country_code,
          first_name: order.payer.name.given_name,
          last_name: order.payer.name.surname,
          email: order.payer.email_address,
          currency_code: order.purchase_units[0].amount.currency_code,
          merchant_id: order.purchase_units[0].payee.merchant_id
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PaypalGateway));
