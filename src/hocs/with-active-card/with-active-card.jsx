import React, {PureComponent} from 'react';

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: -1,
      };

      this._hoverTimeout = null;

      this._handleActiveCard = this._handleActiveCard.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
    }

    _handleActiveCard(id) {
      this._hoverTimeout = setTimeout(() =>
        this.setState({
          activeCard: id
        }), 1000);
    }

    _handleMouseLeave() {
      clearTimeout(this._hoverTimeout);
      this._hoverTimeout = null;

      this.setState({
        activeCard: -1
      });
    }

    componentWillUnmount() {
      clearTimeout(this._hoverTimeout);
      this._hoverTimeout = null;
    }

    render() {
      const {activeCard} = this.state;

      return (
        <Component {...this.props}
          activeCard={activeCard}
          handleActiveCard={this._handleActiveCard}
          handleMouseLeave={this._handleMouseLeave}
        />
      );
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
