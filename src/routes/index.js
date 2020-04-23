import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from "../NewHomepage/containers/Layout/Layout";
import * as actions from "../NewHomepage/redux/actions/AuthActions/AuthAction";
import LoginRoute from "../Login/LoginRoute";

import ArticlesMain from "../NewHomepage/containers/Pages/ArticlePage/container/ArticlesMain/ArticlesMain";
import Profile from "../NewHomepage/containers/Pages/ProfilePage/Container/Profile/Profile";
import EditProfile from "../NewHomepage/containers/Pages/ProfilePage/Container/EditProfile/EditProfile";

import TrendingComponent from "../MobileView/MobileContainer/MobilePages/Homepage/Trending/Trending";
import EditorPickMbComponent from "../MobileView/MobileContainer/MobilePages/Homepage/EditorPick/EditorPickMb";
import SignupRoute from "../Login/SignupRoute/SingupRoute";

import Scholarship from "../NewHomepage/containers/Pages/Scholarship/Scholarship";

import PaymentReciept from "../Subscription/container/PaymentReceipt/PaymentReceipt";
import CategoryList from "../NewHomepage/containers/Pages/CategoryList/CategoryList";
import CheckoutPage from "../Subscription/container/CheckoutPage/CheckoutPage";
import AlaCarte from "../Subscription/container/A-la-carte/AlaCarte";
import NewSubscription from "../Subscription/container/NewSubscription/NewSubscription";

import CategoryResult from "../NewHomepage/containers/Pages/CategoryResult/CategoryResult";
import TermsConditions from "../NewHomepage/containers/Pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../NewHomepage/containers/Pages/PrivacyPolicy/PrivacyPolicy";
import Searchresult from "../NewHomepage/containers/Pages/SearchResult/Searchresult";
import NotFound from "./NotFound";
import PublicProfile from "../NewHomepage/containers/Pages/ProfilePage/Container/PublicProfileView/PublicProfile";
import My404Component from "./My404Component";
import ErrorPage from "./Error";

class Routes extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  // ProductionScripts = () => {
  //   let paypalScript = document.createElement("script");
  //   paypalScript.setAttribute(
  //     "src",
  //     "https://www.paypal.com/sdk/js?client-id=AfS_vQ-d8zY0Po0sjE-oFw_IscBT5d-hE_8bcint8oipjjltn1CUbhyDNu0KaPnhqoUKxKqKBJkIGCqS"
  //   );
  //   document.head.appendChild(paypalScript);
  // };

  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" render={() => <Layout {...this.props} />} />

          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/create-account" component={SignupRoute} />
          <Route exact path="/trending" component={TrendingComponent} />
          <Route exact path="/EditorPick" component={EditorPickMbComponent} />

          <Route exact path="/search/" component={Searchresult} />

          <Route
            exact
            path="/vigyaa-scholarship"
            render={() => <Scholarship {...this.props} />}
          />
          <Route
            exact
            path="/category-list"
            render={() => <CategoryList {...this.props} />}
          />
          <Route path="/category-list/:id" component={CategoryResult} />
          <Route
            exact
            path="/paymentReceipt"
            render={() => <PaymentReciept {...this.props} />}
          />
          <Route
            exact
            path="/a-la-carte"
            render={() => <AlaCarte {...this.props} />}
          />
          <Route
            exact
            path="/Checkout-page"
            render={() => <CheckoutPage {...this.props} />}
          />
          <Route
            exact
            path="/subscription"
            render={() => <NewSubscription {...this.props} />}
          />
          <Route
            exact
            path="/terms-and-conditions"
            component={TermsConditions}
          />
          <Route exact path="/privacy-and-policy" component={PrivacyPolicy} />
          <Route
            exact
            path="/profile"
            render={() => <Profile {...this.props} />}
          />
          <Route
            exact
            path="/edit-profile"
            render={() => <EditProfile {...this.props} />}
          />
          <Route
            exact
            path="/author/:author"
            render={() => <PublicProfile {...this.props} />}
          />
          <Route path="/404" exact component={ErrorPage} />

          {/* <Route
            exact
            path="/:slug"
            render={() => <ArticlesMain {...this.props} />}
          /> */}

          <Route
            exact
            path="/:author/:title"
            render={() => <ArticlesMain {...this.props} />}
          />
          {/* <Route
            exact
            path="/:slug"
            render={() => <ArticlesMain {...this.props} />}
          /> */}

          <Route path="*" exact component={My404Component} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticate: state.fetchAuthReducer.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => {
      dispatch(actions.authCheckState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
