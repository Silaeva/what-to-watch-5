import React from "react";
import PropTypes from "prop-types";
import FilmCard from "../film-card/film-card";

const FilmCardList = (props) => {
  const {films, onFilmCardClick, handleActiveCard, handleMouseLeave, activeCard} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => {
        return (
          <FilmCard
            id={film.id}
            key={film.id}
            title={film.title}
            image={film.previewImage}
            onMouseEnter={handleActiveCard}
            onMouseLeave={handleMouseLeave}
            onFilmCardClick={onFilmCardClick}
            previewVideo={film.previewVideo}
            isActive={film.id === activeCard}
          />
        );
      })}
    </div>
  );
};

FilmCardList.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })),
  handleActiveCard: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  activeCard: PropTypes.number.isRequired
};

export default FilmCardList;
