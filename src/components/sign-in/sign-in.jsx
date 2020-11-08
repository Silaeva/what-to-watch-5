import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PageFooter from "../page-footer/page-footer";
import LogoHeader from "../logo-header/logo-header";
import {login} from "../../store/api-actions";

const SignIn = (props) => {
  const {onSubmit, handleEmailChange, handlePasswordChange, email, password} = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: email,
      password
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <LogoHeader />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
                onChange={handleEmailChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
                onChange={handlePasswordChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter />

    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
