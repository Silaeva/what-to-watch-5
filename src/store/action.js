const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  CLEAR_SHOWN_FILMS: `CLEAR_SHOWN_FILMS`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

const changeFilter = (genre) => ({
  type: ActionType.CHANGE_FILTER,
  payload: genre
});

const clearShownFilms = () => ({
  type: ActionType.CLEAR_SHOWN_FILMS
});

const showMoreFilms = () => ({
  type: ActionType.SHOW_MORE_FILMS
});

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

const loadPromo = (film) => ({
  type: ActionType.LOAD_PROMO,
  payload: film
});

const loadFavorites = (films) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: films
});

const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export {ActionType, changeFilter, clearShownFilms, showMoreFilms, loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute};
