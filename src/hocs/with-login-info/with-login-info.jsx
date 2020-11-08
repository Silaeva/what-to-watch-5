import React, {PureComponent} from 'react';

const withLoginInfo = (Component) => {
  class WithLoginInfo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
    }


    _handleEmailChange(evt) {
      this.setState({
        email: evt.target.value
      });
    }

    _handlePasswordChange(evt) {
      this.setState({
        password: evt.target.value
      });
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component {...this.props}
          email={email}
          password={password}
          handleEmailChange={this._handleEmailChange}
          handlePasswordChange={this._handlePasswordChange}
        />
      );
    }

  }

  return WithLoginInfo;
};

export default withLoginInfo;
