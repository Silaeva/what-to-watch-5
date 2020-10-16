import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player";

const FilmCard = (props) => {
  const {image, title, onMouseEnter, onMouseLeave, id, onFilmCardClick, srcVideo, isPlaying} = props;

  return (
    <article
      data-id={id}
      onMouseEnter={() =>setTimeout(() => {
        onMouseEnter(id);
      }, 1000)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onFilmCardClick(id)}
      className="small-movie-card catalog__movies-card"
    >
      {
        isPlaying
          ? <VideoPlayer srcVideo={srcVideo} image={image} />
          : <div className="small-movie-card__image">
            <img src={image} alt={title} width="280" height="175" />
          </div>
      }


      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  srcVideo: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default FilmCard;
