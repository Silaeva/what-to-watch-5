import React from "react";
import PropTypes from "prop-types";

const FilmPageReviews = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((review, i) => {
          return (
            <div key={`${i}-${review.user}`} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.text}</p>

                <footer className="review__details">
                  <cite className="review__author">{review.user}</cite>
                  <time className="review__date" dateTime="2016-12-24">{review.date}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{review.rating}</div>
            </div>);
        })}

      </div>
    </div>
  );
};

FilmPageReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.arrayOf(PropTypes.string.isRequired),
    rating: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
  )
};

export default FilmPageReviews;
