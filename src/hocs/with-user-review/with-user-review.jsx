import React, {PureComponent} from 'react';

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
    }


    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value,
      });
    }

    render() {
      const {rating} = this.state;

      return (
        <Component {...this.props}
          currentRating={rating}
          handleRatingChange={this._handleRatingChange}
          handleCommentChange={this._handleCommentChange}
        />
      );
    }

  }

  return WithUserReview;
};

export default withUserReview;

