import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchComments} from "../../store/api-actions";
import {formatDate} from "../../utils";

const FilmPageReviews = (props) => {
  const {filmId, loadComments, comments} = props;

  useEffect(() => {
    loadComments(filmId);
  }, [filmId]);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {comments.map((comment, i) => {
          return (
            <div key={`${i}-${comment.user}`} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{comment.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user}</cite>
                  <time className="review__date" dateTime="2016-12-24">{formatDate(comment.date)}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>);
        })}

      </div>
    </div>
  );
};

FilmPageReviews.propTypes = {
  filmId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
  ),
  loadComments: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  comments: DATA.comments
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(fetchComments(id));
  }
});

export {FilmPageReviews};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPageReviews);
