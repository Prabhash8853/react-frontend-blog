import React from "react";
import { connect } from "react-redux";
import Input from "../../NewHomepage/components/CommonComponents/Input/Input";
import { updateObject } from "../../NewHomepage/redux/ReduxUtility/ReduxUitility";
import { checkValidity } from "../../utility/Validity/checkValidity";
import OAuth from "../OAuth/OAuth";
import * as actions from "../../NewHomepage/redux/actions/AuthActions/AuthAction";
import { Redirect, withRouter } from "react-router";
import "./LoginDesktop.css";
import SignupDesktop from "../SingupDesktop/SignupDesktop";
import Spinner from "../../loader/Spinner";
import { Link } from "react-router-dom";

class LoginDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputClicked: false,
      signUpClicked: false,
      loginClicked: false,
      URLtoCheck: window.location.href.indexOf("/login/?next="),
      redirectionURL: "",
      Form: {
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "example@example.com"
          },
          value: "",
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        },
        password: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "password"
          },
          value: "",
          validation: {
            required: true,
            minLength: 8,
            maxLength: 16
          },
          valid: false,
          touched: false
        }
      },
      formIsValid: false
    };
  }

  inputHandler = (e, inputId) => {
    const updatedFormElement = updateObject(this.state.Form[inputId], {
      value: e.target.value,
      valid: checkValidity(e.target.value, this.state.Form[inputId].validation),
      touched: true
    });

    const updatedForm = updateObject(this.state.Form, {
      [inputId]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputId in updatedForm) {
      formIsValid = updatedForm[inputId].valid && formIsValid;
    }

    this.setState({ Form: updatedForm, formIsValid: formIsValid });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const formData = {};

    for (let formElementId in this.state.Form) {
      formData[formElementId] = this.state.Form[formElementId].value;
    }
    this.props.getLoginUser(formData);

    this.setState({
      loginClicked: true
    });
  };

  SignupClicked = () => {
    this.setState({
      signUpClicked: true
    });
  };

  handleGoBack = () => {
    this.setState({
      signUpClicked: false
    });
  };

  componentDidMount() {
    const redirectingURL = window.location.href.slice(
      this.state.URLtoCheck + "/login/?next=".length
    );
    this.setState({
      redirectionURL: redirectingURL
    });
  }

  render() {
    const formElementArray = [];
    for (let key in this.state.Form) {
      formElementArray.push({
        id: key,
        config: this.state.Form[key]
      });
    }

    let formElements = (
      <form className="form-group_mb" onSubmit={this.onSubmitHandler}>
        {formElementArray.map(formElement => {
          return (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={event => this.inputHandler(event, formElement.id)}
            />
          );
        })}
        {this.props.loading || this.state.loginClicked ? (
          <button className="loginBtn">
            <span style={{ display: "inline-block" }}>Login</span> <Spinner />
          </button>
        ) : (
          <button className="loginBtn">Login</button>
        )}
      </form>
    );

    return (
      <div className="login_dsktp">
        {this.props.error ? (
          <React.Fragment>
            <React.Fragment>
              <div className="login_sec_mb">
                <div className="login_logo text-center">
                  <a href="/">
                    <img
                      src="/static/img/vigyaa-logo-home.svg"
                      alt="vigyaa-logo"
                    ></img>{" "}
                  </a>
                </div>
                <div className="moto text-center">
                  <p className="mg_btm_0">Ideas Evolve</p>
                  <p className="mg_btm_0">Keep Reading. Keep Writing...</p>
                </div>
              </div>

              <div className="login_opt_dtp text-center">
                <p className="mg_btm_0 color_60 color_60dtp">
                  Log in or sign up for Free
                </p>
              </div>

              <div className="form_elment_dtp">
                {formElements}
                <div className=" alert-login text-center">
                  Email or password you entered doesn't exist
                </div>
                <div className="or_opt_dtp">
                  <span>or</span>
                </div>
                <OAuth />

                <div className="signup_sec_mb">
                  <p className="text-center">
                    {" "}
                    <Link to="/create-account">Or Sign up</Link>
                  </p>
                </div>
              </div>
            </React.Fragment>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="login_mb">
              {this.props.isAuthenticate ? (
                this.state.redirectionURL === "/my-collections/" ||
                this.state.URLtoCheck === -1 ? (
                  <Redirect to="/profile" />
                ) : (
                  <Redirect
                    to={{
                      pathname: this.state.redirectionURL
                    }}
                  />
                )
              ) : (
                <React.Fragment>
                  <div className="login_sec_mb">
                    <div className="login_logo text-center">
                      <a href="/">
                        <img
                          src="/static/img/vigyaa-logo-home.svg"
                          alt="vigyaa-logo"
                        ></img>
                      </a>
                    </div>
                    <div className="moto text-center">
                      <p className="mg_btm_0">Ideas Evolve</p>
                      <p className="mg_btm_0">Keep Reading. Keep Writing...</p>
                    </div>
                  </div>

                  <div className="login_opt_dtp text-center">
                    <p className="mg_btm_0 color_60 color_60dtp">
                      Log in or sign up for Free
                    </p>
                  </div>

                  <div className="form_elment_dtp">
                    {formElements}

                    <div className="or_opt_dtp">
                      <span>or</span>
                    </div>
                    <OAuth />

                    <div className="signup_sec_mb">
                      <p className="text-center">
                        {" "}
                        <Link to="/create-account">Or Sign up</Link>
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
            }
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.fetchAuthReducer.loading,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    error: state.fetchAuthReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLoginUser: data => {
      dispatch(actions.authLogin({ data: data }));
    }
  };
};

const LoginDtpComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDesktop);

export default LoginDtpComponent;
