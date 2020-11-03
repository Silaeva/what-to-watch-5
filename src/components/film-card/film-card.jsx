import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

const FilmCard = (props) => {
  const {image, title, onMouseEnter, onMouseLeave, id, onFilmCardClick, previewVideo, isActive} = props;

  return (
    <article
      data-id={id}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onFilmCardClick(id)}
      className="small-movie-card catalog__movies-card"
    >
      <VideoPlayer previewVideo={previewVideo} image={image} isActive={isActive} />

      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  previewVideo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default React.memo(FilmCard);
