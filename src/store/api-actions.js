import {loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute, toggleIsLoading, toggleIsLoadError, checkAuthInProgress, checkFavoritesIsLoading, checkFavoritesLoadError, checkCommentsIsLoading, checkCommentsLoadError} from "./action";
import {AuthorizationStatus} from "../const";
import {APIRoute} from "../route";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapters";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(toggleIsLoading(false));
      dispatch(loadFilms(data.map(adaptFilmToClient)));
    })
    .catch(() => {
      dispatch(toggleIsLoading(false));
      dispatch(toggleIsLoadError(true));
    })
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(toggleIsLoading(false));
      dispatch(loadPromo(adaptFilmToClient(data)));
    })
    .catch(() => {
      dispatch(toggleIsLoading(false));
      dispatch(toggleIsLoadError(true));
    })
);

const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => {
      dispatch(checkFavoritesIsLoading(false));
      dispatch(loadFavorites(data.map(adaptFilmToClient)));
    })
    .catch(() => {
      dispatch(checkFavoritesIsLoading(false));
      dispatch(checkFavoritesLoadError(true));
    })
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => {
      dispatch(checkCommentsIsLoading(false));
      dispatch(loadComments(data.map(adaptCommentToClient)));
    })
    .catch(() => {
      dispatch(checkCommentsIsLoading(false));
      dispatch(checkCommentsLoadError(true));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(checkAuthInProgress(false));
    })
    .catch(() => {
      dispatch(checkAuthInProgress(false));
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(APIRoute.ROOT)))
);

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, checkAuth, login};
