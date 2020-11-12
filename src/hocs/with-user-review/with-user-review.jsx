import React, {PureComponent} from 'react';

const withUserReview = (Component) => {
  class WithUserReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``,
        isReviewValid: false
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
        isReviewValid: evt.target.value.length >= 50 && evt.target.value.length <= 400
      });
    }

    render() {
      const {rating, comment, isReviewValid} = this.state;

      return (
        <Component {...this.props}
          isReviewValid={isReviewValid && !!rating}
          rating={rating}
          comment={comment}
          handleRatingChange={this._handleRatingChange}
          handleCommentChange={this._handleCommentChange}
        />
      );
    }

  }

  return WithUserReview;
};

export default withUserReview;

