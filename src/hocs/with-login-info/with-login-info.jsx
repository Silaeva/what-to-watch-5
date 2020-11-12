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
      if (evt.target.name.includes(`email`)) {
        this.setState({
          email: evt.target.value
        });
      } else if (evt.target.name.includes(`password`)) {
        this.setState({
          password: evt.target.value
        });
      }
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
