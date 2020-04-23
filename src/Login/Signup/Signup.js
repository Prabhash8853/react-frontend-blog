import React from "react";
import { connect } from "react-redux";
import * as actions from "../../NewHomepage/redux/actions/AuthActions/AuthAction";
import { updateObject } from "../../NewHomepage/redux/ReduxUtility/ReduxUitility";
import { checkValidity } from "../../utility/Validity/checkValidity";
import Input from "../../NewHomepage/components/CommonComponents/Input/Input";
import "./Signup.css";
// import { Redirect } from 'react-router';
import VerifyAccount from "../verfiyAccount";
import Spinner from "../../loader/Spinner";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signupBtnClicked: false,
      SignupForm: {
        FirstName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "First Name"
          },
          value: "",
          validation: {
            required: true,
            minLength: 2
          },
          valid: false,
          touched: false
        },

        LastName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Last Name"
          },
          value: "",
          validation: {
            required: true,
            minLength: 2
          },
          valid: false,
          touched: false
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "example@something.com"
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
            placeholder: "password (min 8 characters)"
          },
          value: "",
          validation: {
            required: true,
            minLength: 8
          },
          valid: false,
          touched: false
        },
        ConfirmPassword: {
          elementType: "input",
          elementConfig: {
            type: "password",
            placeholder: "Confirm Password (min 8 characters)"
          },
          value: "",
          validation: {
            required: true,
            minLength: 8
          },
          valid: false,
          touched: false
        }
      },
      formIsValid: false
    };
  }

  inputHandler = (e, inputId) => {
    const updatedFormElement = updateObject(this.state.SignupForm[inputId], {
      value: e.target.value,
      valid: checkValidity(
        e.target.value,
        this.state.SignupForm[inputId].validation
      ),
      touched: true
    });

    const updatedForm = updateObject(this.state.SignupForm, {
      [inputId]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputId in updatedForm) {
      formIsValid = updatedForm[inputId].valid && formIsValid;
    }

    this.setState({ SignupForm: updatedForm, formIsValid: formIsValid });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const formData = {};

    for (let formElementId in this.state.SignupForm) {
      formData[formElementId] = this.state.SignupForm[formElementId].value;
    }

    if (formData.password !== formData.ConfirmPassword) {
      this.props.passwordMismatchAction();
    } else {
      this.props.authSignUp(formData);
    }
    this.setState({
      signupBtnClicked: true
    });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.SignupForm) {
      formElementArray.push({
        id: key,
        config: this.state.SignupForm[key]
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
        <button className="signupBtn">
          Signup {this.state.signupBtnClicked ? <Spinner /> : null}
        </button>
      </form>
    );

    return (
      <div className="signup_mb">
        <div className="signup_mb_tp">
          <div className="signup_mb_nav">
            <div className="signup_head text-center">
              <p>Sign Up</p>
            </div>
          </div>
        </div>

        <div className="signup-form">
          {this.props.signupRes.result == "success" ? (
            <VerifyAccount />
          ) : (
            <div>{formElements}</div>
          )}

          {this.props.signupRes.result === "error" ? (
            <div className="text-center">
              <p style={{ marginTop: "20px" }}>
                {this.props.signupRes.errors.email}
              </p>
            </div>
          ) : null}

          {this.props.passwordMismatchState ? (
            <div className="text-center color_red">Password Do not Match</div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupLoading: state.fetchAuthReducer.signupLoading,
    signupRes: state.fetchAuthReducer.signupRes,
    signuperr: state.fetchAuthReducer.signuperr,
    asswordMismatchState: state.fetchAuthReducer.passwordMismatch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authSignUp: data => {
      dispatch(actions.authSignUp({ data: data }));
    },
    passwordMismatchAction: data => {
      dispatch(actions.PasswordMismatchAction());
    }
  };
};

const SignupMb = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupMb;
