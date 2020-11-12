import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-actions";
import {setCommentIsSending} from "../../store/action";

const STAR_NUMBERS = [`1`, `2`, `3`, `4`, `5`];

const AddReviewForm = (props) => {
  const {rating, comment, handleRatingChange, handleCommentChange, onPostBtnClick, currentFilmId, isCommentSending, isCommentSendError, isReviewValid} = props;

  const handlePostBtnClick = (evt) => {
    evt.preventDefault();

    onPostBtnClick(
        currentFilmId,
        {
          rating,
          comment
        });
  };

  const getMessage = () => {
    if (isCommentSending) {
      return (
        <p>Sending your review...</p>
      );
    } else if (isCommentSendError) {
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
                  disabled={isCommentSending}
                  seted={rating === starNumber}
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
          disabled={isCommentSending}
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
  comment: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  onPostBtnClick: PropTypes.func.isRequired,
  currentFilmId: PropTypes.number.isRequired,
  isCommentSending: PropTypes.bool.isRequired,
  isCommentSendError: PropTypes.bool.isRequired,
  isReviewValid: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  isCommentSending: DATA.isCommentSending,
  isCommentSendError: DATA.isCommentSendError
});

const mapDispatchToProps = (dispatch) => ({
  onPostBtnClick(filmId, commentData) {
    dispatch(setCommentIsSending(true));
    dispatch(sendComment(filmId, commentData));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
