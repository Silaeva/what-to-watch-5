import React, {PureComponent} from 'react';

const withLoginInfo = (Component) => {
  class WithLoginInfo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component {...this.props}
          email={email}
          password={password}
          handleChange={this._handleChange}
        />
      );
    }
  }

  return WithLoginInfo;
};

export default withLoginInfo;
