import {ActionType} from "../../action";
import {filmsCount} from "../../../const";

const initialState = {
  films: [],
  filteredFilms: [],
  favoriteFilms: [],
  promoFilm: {},
  filmById: {},
  shownFilmsNumber: filmsCount.PER_STEP,
  comments: [],
  isFavoritesLoading: true,
  isFavoritesLoadError: false,
  isCommentsLoading: true,
  isCommentsLoadError: false,
  isDataSending: false,
  isDataSendError: false,
  isFilmByIdLoading: true,
  isFilmByIdLoadError: false
};

const getShownFilmsNumber = (state) => {
  const newNumber = state.shownFilmsNumber + filmsCount.PER_STEP;

  if (newNumber > state.filteredFilms.length) {
    return state.shownFilmsNumber + (state.filteredFilms.length % filmsCount.PER_STEP);
  }
  return newNumber;
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
        filteredFilms: action.payload
      });
    case ActionType.SHOW_MORE_FILMS:
      return Object.assign({}, state, {
        shownFilmsNumber: getShownFilmsNumber(state)
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favoriteFilms: action.payload,
      });
    case ActionType.SET_FAVORITES_IS_LOADING:
      return Object.assign({}, state, {
        isFavoritesLoading: action.payload,
      });
    case ActionType.SET_FAVORITES_LOAD_ERROR:
      return Object.assign({}, state, {
        isFavoritesLoadError: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload,
      });
    case ActionType.SET_COMMENTS_IS_LOADING:
      return Object.assign({}, state, {
        isCommentsLoading: action.payload,
      });
    case ActionType.SET_COMMENTS_LOAD_ERROR:
      return Object.assign({}, state, {
        isCommentsLoadError: action.payload,
      });
    case ActionType.SET_DATA_IS_SENDING:
      return Object.assign({}, state, {
        isDataSending: action.payload,
      });
    case ActionType.SET_DATA_SEND_ERROR:
      return Object.assign({}, state, {
        isDataSendError: action.payload,
      });
    case ActionType.LOAD_FILM_BY_ID:
      return Object.assign({}, state, {
        filmById: action.payload,
      });
    case ActionType.SET_FILM_BY_ID_LOADING:
      return Object.assign({}, state, {
        isFilmByIdLoading: action.payload,
      });
    case ActionType.SET_FILM_BY_ID_LOAD_ERROR:
      return Object.assign({}, state, {
        isFilmByIdLoadError: action.payload,
      });
  }

  return state;
};

export {filmsData};
