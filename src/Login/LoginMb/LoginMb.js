import React from "react";
import "./LoginMb.css";
import { connect } from "react-redux";
import Input from "../../NewHomepage/components/CommonComponents/Input/Input";
import { updateObject } from "../../NewHomepage/redux/ReduxUtility/ReduxUitility";
import { checkValidity } from "../../utility/Validity/checkValidity";
import OAuth from "../OAuth/OAuth";
import * as actions from "../../NewHomepage/redux/actions/AuthActions/AuthAction";
import { Redirect } from "react-router";
import SignupRoute from "../SignupRoute/SingupRoute";
import Spinner from "../../loader/Spinner";
import { Link } from "react-router-dom";

class LoginMb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
              className="inpt_login"
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
        {this.props.loading ? (
          <button className="loginBtn" onClick={this.onSubmitHandler}>
            <span style={{ display: "inline-block" }}>Login</span> <Spinner />
          </button>
        ) : (
          <button className="loginBtn" onClick={this.onSubmitHandler}>
            Login
          </button>
        )}
      </form>
    );

    return (
      <div className="Authentication-pg">
        <div className="login_mb">
          {this.props.error ? (
            <React.Fragment>
              {
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

                  <div className="form_element">{formElements}</div>
                  <div className=" alert-login text-center">
                    Email or password you entered doesn't exist
                  </div>
                  <div className="or_opt">
                    <span>or</span>
                  </div>
                  <OAuth />
                  <div className="signup_sec_mb">
                    <p className="text-center">
                      {" "}
                      <Link to="/create-account">Or Sign up</Link>
                    </p>
                  </div>
                </React.Fragment>
              }
            </React.Fragment>
          ) : (
            <React.Fragment>
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
                        ></img>{" "}
                      </a>
                    </div>
                    <div className="moto text-center">
                      <p className="mg_btm_0">Ideas Evolve</p>
                      <p className="mg_btm_0">Keep Reading. Keep Writing...</p>
                    </div>
                  </div>

                  <div className="form_element">{formElements}</div>

                  <div className="or_opt">
                    <span>or</span>
                  </div>
                  <OAuth />
                  <div className="signup_sec_mb">
                    <p className="text-center">
                      {" "}
                      <Link to="/create-account">Or Sign up</Link>
                    </p>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
        }
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

const LoginMbComponent = connect(mapStateToProps, mapDispatchToProps)(LoginMb);

export default LoginMbComponent;
