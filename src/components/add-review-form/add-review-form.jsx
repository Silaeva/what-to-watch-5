import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

const STAR_NUMBERS = [`1`, `2`, `3`, `4`, `5`];

const AddReviewForm = (props) => {
  const {isDataSending, isDataSendError, isReviewValid, handleRatingChange, handleCommentChange, handlePostBtnClick, rating} = props;

  const getMessage = () => {
    if (isDataSending) {
      return (
        <p>Sending your review...</p>
      );
    } else if (isDataSendError) {
      return (
        <p style={{color: `#ff6347`}}>Sorry, something went wrong! Please, try again later...</p>
      );
    }

    return ``;
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <div className="rating">
        <div className="rating__stars">

          {STAR_NUMBERS.map((starNumber) => {
            return (
              <React.Fragment key={starNumber}>
                <input className="rating__input" id={`star-${starNumber}`} type="radio" name="rating" value={starNumber}
                  disabled={isDataSending}
                  checked={rating === starNumber}
                  onChange={handleRatingChange}
                />
                <label className="rating__label" htmlFor={`star-${starNumber}`}>Rating {starNumber}</label>
              </React.Fragment>
            );
          })
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          onChange={handleCommentChange}
          disabled={isDataSending}
          maxLength="400"
        >
        </textarea>
        <div className="add-review__submit">
          <button
            disabled={!isReviewValid}
            onClick={handlePostBtnClick}
            className="add-review__btn" type="submit">Post</button>
        </div>

      </div>

      {getMessage()}

    </form>
  );
};

AddReviewForm.propTypes = {
  rating: PropTypes.string.isRequired,
  isDataSending: PropTypes.bool.isRequired,
  isDataSendError: PropTypes.bool.isRequired,
  isReviewValid: PropTypes.bool.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  handlePostBtnClick: PropTypes.func.isRequired
};

const mapStateToProps = ({DATA}) => ({
  isDataSending: DATA.isDataSending,
  isDataSendError: DATA.isDataSendError
});

export {AddReviewForm};
export default connect(mapStateToProps)(AddReviewForm);
