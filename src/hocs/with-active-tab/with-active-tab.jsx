import React, {PureComponent} from 'react';
import {FilmTab} from "../../const";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: FilmTab.OVERVIEW,
      };

      this._handleActiveTab = this._handleActiveTab.bind(this);
    }

    _handleActiveTab(value) {
      this.setState({
        activeTab: value,
      });
    }

    render() {
      const {activeTab} = this.state;

      return (
        <Component {...this.props}
          activeTab={activeTab}
          handleActiveTab={this._handleActiveTab}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
