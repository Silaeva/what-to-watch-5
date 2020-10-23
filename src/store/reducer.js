import {films} from "../mocks/films";
import {ActionType} from "./action";
import {filmsCount} from "../const";

const initialState = {
  activeGenre: `All genres`,
  filteredFilms: films,
  films,
  shownFilmsNumber: filmsCount.PER_STEP,
};

const getFilteredFilms = (activeGenre) => {
  if (activeGenre === `All genres`) {
    return films;
  }
  return films.filter((film) => film.genre === activeGenre);
};

const getShownFilmsNumber = (state) => {
  const newNumber = state.shownFilmsNumber + filmsCount.PER_STEP;

  if (newNumber > state.filteredFilms.length) {
    return state.shownFilmsNumber + (state.filteredFilms.length % filmsCount.PER_STEP);
  }
  return newNumber;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        activeGenre: action.payload
      });
    case ActionType.GET_FILMS_BY_GENRE:
      return Object.assign({}, state, {
        filteredFilms: getFilteredFilms(action.payload)
      });
    case ActionType.SHOW_MORE_FILMS:
      return Object.assign({}, state, {
        shownFilmsNumber: getShownFilmsNumber(state)
      });
    case ActionType.CLEAR_SHOWN_FILMS:
      return Object.assign({}, state, {
        shownFilmsNumber: filmsCount.PER_STEP
      });
  }

  return state;
};

export {reducer};
