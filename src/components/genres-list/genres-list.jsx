import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

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
                onClick={(evt) => {
                  evt.preventDefault();
                  onGenreClick(genre);
                }}
                href="#"
                className="catalog__genres-link">{getGenreName(genre)}</a>
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

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.changeFilter(activeGenre));
    dispatch(ActionCreator.getFilmsByGenre(activeGenre));
    dispatch(ActionCreator.clearShownFilms());
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
