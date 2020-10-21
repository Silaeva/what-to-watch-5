import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {films, activeGenre, onGenreClick} = props;

  const uniqGenres = [`All genres`, ...new Set(films.map((film) => film.genre))];

  const getGenreName = (genre) => {
    if (genre === `Comedy`) {
      return `Comedies`;
    } else if (genre === `Drama`) {
      return `Dramas`;
    } else if (genre === `Thriller`) {
      return `Thrillers`;
    }
    return genre;
  };

  const getGenreItemClass = (genre) => {
    return activeGenre === genre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  };

  return (
    <ul className="catalog__genres-list">
      {
        uniqGenres.map((genre, i) => {
          return (
            <li key={genre + i} className={getGenreItemClass(genre)}>
              <a
                onClick={() => onGenreClick(genre)} href="#" className="catalog__genres-link">{getGenreName(genre)}</a>
            </li>
          );
        })
      }

    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
