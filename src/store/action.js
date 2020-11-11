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
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  TOGGLE_IS_LOADING: `TOGGLE_IS_LOADING`,
  TOGGLE_IS_LOAD_ERROR: `TOGGLE_IS_LOAD_ERROR`,
  CHECK_AUTH_PROGRESS: `CHECK_AUTH_PROGRESS`,
  CHECK_FAVORITES_IS_LOADING: `CHECK_FAVORITES_IS_LOADING`,
  CHECK_FAVORITES_LOAD_ERROR: `CHECK_FAVORITES_LOAD_ERROR`,
  CHECK_COMMENTS_IS_LOADING: `CHECK_COMMENTS_IS_LOADING`,
  CHECK_COMMENTS_LOAD_ERROR: `CHECK_COMMENTS_LOAD_ERROR`,
  CHECK_COMMENT_IS_SENDING: `CHECK_COMMENT_IS_SENDING`,
  CHECK_COMMENT_SEND_ERROR: `CHECK_COMMENT_SEND_ERROR`
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

const toggleIsLoading = (bool) => ({
  type: ActionType.TOGGLE_IS_LOADING,
  payload: bool
});

const toggleIsLoadError = (bool) => ({
  type: ActionType.TOGGLE_IS_LOAD_ERROR,
  payload: bool
});

const checkAuthInProgress = (bool) => ({
  type: ActionType.CHECK_AUTH_PROGRESS,
  payload: bool
});

const checkFavoritesIsLoading = (bool) => ({
  type: ActionType.CHECK_FAVORITES_IS_LOADING,
  payload: bool
});

const checkFavoritesLoadError = (bool) => ({
  type: ActionType.CHECK_FAVORITES_LOAD_ERROR,
  payload: bool
});

const checkCommentsIsLoading = (bool) => ({
  type: ActionType.CHECK_COMMENTS_IS_LOADING,
  payload: bool
});

const checkCommentsLoadError = (bool) => ({
  type: ActionType.CHECK_COMMENTS_LOAD_ERROR,
  payload: bool
});

const checkCommentIsSending = (bool) => ({
  type: ActionType.CHECK_COMMENT_IS_SENDING,
  payload: bool
});

const checkCommentSendError = (bool) => ({
  type: ActionType.CHECK_COMMENT_SEND_ERROR,
  payload: bool
});

export {ActionType, changeFilter, clearShownFilms, showMoreFilms, loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, toggleIsLoading, toggleIsLoadError, checkAuthInProgress, checkFavoritesIsLoading, checkFavoritesLoadError, checkCommentsIsLoading, checkCommentsLoadError, checkCommentIsSending, checkCommentSendError};
