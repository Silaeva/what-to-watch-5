import React from "react";
import PropTypes from "prop-types";

const FilmCard = (props) => {
  const {image, title, onHover, key, id, onFilmCardClick} = props;

  return (
    <article
      data-id={id}
      key={key}
      onMouseOver={() => onHover(id)}
      onClick={() => onFilmCardClick(id)}
      className="small-movie-card catalog__movies-card"
    >
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default FilmCard;
