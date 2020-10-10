import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FilmCard = (props) => {
  const {image, title, onHover, key, id} = props;

  return (
    <article
      data-id={id}
      key={key}
      onMouseOver={() => onHover(id)}
      className="small-movie-card catalog__movies-card"
    >
      <Link to="/films/:id">
        <div className="small-movie-card__image">
          <img src={image} alt={title} width="280" height="175" />
        </div>
      </Link>
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
};

export default FilmCard;
