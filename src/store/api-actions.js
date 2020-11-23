import {loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, toggleIsLoadError, setAuthInProgress, setFavoritesIsLoading, setFavoritesLoadError, setCommentsIsLoading, setCommentsLoadError, setDataIsSending, setDataSendError, loadFilmById, setIsFilmByIdLoading, setIsFilmByIdLoadError} from "./action";
import {AuthorizationStatus, StatusCode} from "../const";
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
      dispatch(loadFavorites(data.map(adaptFilmToClient)));
      dispatch(setFavoritesIsLoading(false));
    })
    .catch(() => {
      dispatch(setFavoritesIsLoading(false));
      dispatch(setFavoritesLoadError(true));
    })
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => {
      dispatch(loadComments(data.map(adaptCommentToClient)));
      dispatch(setCommentsIsLoading(false));
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
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

const sendComment = (filmId, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.COMMENTS + filmId, {rating, comment})
    .then(() => {
      dispatch(redirectToRoute(AppRoute.FILMS + filmId));
      dispatch(setDataIsSending(false));
    })
    .catch(() => {
      dispatch(setDataIsSending(false));
      dispatch(setDataSendError(true));
    })
);

const sendFavoriteStatus = (filmId, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${filmId}/${isFavorite ? StatusCode.REMOVE : StatusCode.ADD}`)
    .then(() => {
      dispatch(fetchPromoFilm());
      dispatch(fetchFilmById(filmId));
      dispatch(setDataIsSending(false));
    })
    .catch(() => {
      dispatch(setDataIsSending(false));
      dispatch(setDataSendError(true));
    })
);

const fetchFilmById = (FilmId) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${FilmId}`)
    .then(({data}) => {
      dispatch(loadFilmById(adaptFilmToClient(data)));
      dispatch(setIsFilmByIdLoading(false));
    })
    .catch(() => {
      dispatch(setIsFilmByIdLoading(false));
      dispatch(setIsFilmByIdLoadError(true));
    })
);

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, checkAuth, login, sendComment, sendFavoriteStatus, fetchFilmById};
