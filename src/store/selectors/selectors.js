import {createSelector} from 'reselect';

const getFilms = ({DATA}) => DATA.films;

const getActiveGenre = ({STATE}) => STATE.activeGenre;

const getFilmsByGenre = createSelector(
    getFilms,
    getActiveGenre,
    (films, activeGenre) => {
      if (activeGenre === `All genres`) {
        return films;
      }
      return films.filter((film) => film.genre === activeGenre);
    }
);

export {getFilmsByGenre};
