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
  SET_AUTH_PROGRESS: `SET_AUTH_PROGRESS`,
  SET_FAVORITES_IS_LOADING: `SET_FAVORITES_IS_LOADING`,
  SET_FAVORITES_LOAD_ERROR: `SET_FAVORITES_LOAD_ERROR`,
  SET_COMMENTS_IS_LOADING: `SET_COMMENTS_IS_LOADING`,
  SET_COMMENTS_LOAD_ERROR: `SET_COMMENTS_LOAD_ERROR`,
  SET_COMMENT_IS_SENDING: `SET_COMMENT_IS_SENDING`,
  SET_COMMENT_SEND_ERROR: `SET_COMMENT_SEND_ERROR`
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

const setAuthInProgress = (bool) => ({
  type: ActionType.SET_AUTH_PROGRESS,
  payload: bool
});

const setFavoritesIsLoading = (bool) => ({
  type: ActionType.SET_FAVORITES_IS_LOADING,
  payload: bool
});

const setFavoritesLoadError = (bool) => ({
  type: ActionType.SET_FAVORITES_LOAD_ERROR,
  payload: bool
});

const setCommentsIsLoading = (bool) => ({
  type: ActionType.SET_COMMENTS_IS_LOADING,
  payload: bool
});

const setCommentsLoadError = (bool) => ({
  type: ActionType.SET_COMMENTS_LOAD_ERROR,
  payload: bool
});

const setCommentIsSending = (bool) => ({
  type: ActionType.SET_COMMENT_IS_SENDING,
  payload: bool
});

const setCommentSendError = (bool) => ({
  type: ActionType.SET_COMMENT_SEND_ERROR,
  payload: bool
});

export {ActionType, changeFilter, clearShownFilms, showMoreFilms, loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, toggleIsLoading, toggleIsLoadError, setAuthInProgress, setFavoritesIsLoading, setFavoritesLoadError, setCommentsIsLoading, setCommentsLoadError, setCommentIsSending, setCommentSendError};
