import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-actions";
import {setDataIsSending} from "../../store/action";

const STAR_NUMBERS = [`1`, `2`, `3`, `4`, `5`];

const AddReviewForm = (props) => {
  const {onPostBtnClick, currentFilmId, isDataSending, isDataSendError} = props;

  const [rating, setRating] = useState(``);
  const [comment, setComment] = useState(``);
  const [isReviewValid, setIsReviewValid] = useState(false);

  const handleRatingChange = useCallback((evt) => setRating(evt.target.value));
  const handleCommentChange = useCallback(
      (evt) => {
        setComment(evt.target.value);
        setIsReviewValid(evt.target.value.length >= 50 && evt.target.value.length <= 400);
      }
  );

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
  onPostBtnClick: PropTypes.func.isRequired,
  currentFilmId: PropTypes.number.isRequired,
  isDataSending: PropTypes.bool.isRequired,
  isDataSendError: PropTypes.bool.isRequired
};

const mapStateToProps = ({DATA}) => ({
  isDataSending: DATA.isDataSending,
  isDataSendError: DATA.isDataSendError
});

const mapDispatchToProps = (dispatch) => ({
  onPostBtnClick(filmId, commentData) {
    dispatch(setDataIsSending(true));
    dispatch(sendComment(filmId, commentData));
  }
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
