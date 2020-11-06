import {loadFilms, loadPromo, loadFavorites, loadComments, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute} from "../const";
import {adaptFilmToClient, adaptCommentToClient} from "../services/adapters";

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => {
      dispatch(loadPromo(adaptFilmToClient(data)));
    })
);

const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data.map(adaptFilmToClient))))
);

const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS + id)
    .then(({data}) => dispatch(loadComments(data.map(adaptCommentToClient))))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(APIRoute.ROOT)))
);

export {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, checkAuth, login};
