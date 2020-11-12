import {loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, toggleIsLoadError, setAuthInProgress, setFavoritesIsLoading, setFavoritesLoadError, setCommentsIsLoading, setCommentsLoadError, setCommentIsSending, setCommentSendError} from "./action";
import {AuthorizationStatus} from "../const";
import {APIRoute, AppRoute} from "../route";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapters";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadFilms(data.map(adaptFilmToClient)));
    })
    .catch(() => {
      dispatch(toggleIsLoadError(true));
    })
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(adaptFilmToClient(data)));
    })
    .catch(() => {
      dispatch(toggleIsLoadError(true));
    })
);

const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(setFavoritesIsLoading(false));
      dispatch(loadFavorites(data.map(adaptFilmToClient)));
    })
    .catch(() => {
      dispatch(setFavoritesIsLoading(false));
      dispatch(setFavoritesLoadError(true));
    })
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => {
      dispatch(setCommentsIsLoading(false));
      dispatch(loadComments(data.map(adaptCommentToClient)));
    })
    .catch(() => {
      dispatch(setCommentsIsLoading(false));
      dispatch(setCommentsLoadError(true));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setAuthInProgress(false));
    })
    .catch(() => {
      dispatch(setAuthInProgress(false));
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(APIRoute.ROOT)))
);

const sendComment = (filmId, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + filmId, {rating, comment})
    .then(() => {
      dispatch(setCommentIsSending(false));
      dispatch(redirectToRoute(AppRoute.FILMS + filmId));
    })
    .catch(() => {
      dispatch(setCommentIsSending(false));
      dispatch(setCommentSendError(true));
    })
);

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, checkAuth, login, sendComment};
