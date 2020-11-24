import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {adaptFilmToServer, adaptCommentToServer} from "../../../services/adapters";
import {ActionType} from "../../action";
import {StatusCode, filmsCount} from "../../../const";
import {APIRoute} from "../../../route";
import {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms, fetchComments, fetchFilmById, sendComment, sendFavoriteStatus} from "../../api-actions";
import {filmsData} from "./films-data";
import {films, comments, noop} from "../../../test-data";

const api = createAPI(noop);

const mockInitialState = {
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

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsData(void 0, {})).toEqual(mockInitialState);
});


describe(`Reducer should update state`, () => {
  it(`by load films`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_FILMS,
      payload: films,
    })).toEqual(Object.assign({}, mockInitialState, {
      films,
      filteredFilms: films
    }));
  });

  it(`by load promo film`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_PROMO,
      payload: films[0],
    })).toEqual(Object.assign({}, mockInitialState, {
      promoFilm: films[0]
    }));
  });

  it(`by load one film by id`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_FILM_BY_ID,
      payload: films[0],
    })).toEqual(Object.assign({}, mockInitialState, {
      filmById: films[0]
    }));
  });

  it(`by load comments`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    })).toEqual(Object.assign({}, mockInitialState, {
      comments
    }));
  });

  it(`by load favorite films`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.LOAD_FAVORITES,
      payload: films,
    })).toEqual(Object.assign({}, mockInitialState, {
      favoriteFilms: films
    }));
  });

  it(`by increase shown films number`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.SHOW_MORE_FILMS
    })).toEqual(Object.assign({}, mockInitialState, {
      shownFilmsNumber: 8
    }));
  });

  it(`by reset shown films number`, () => {
    expect(filmsData(mockInitialState, {
      type: ActionType.CLEAR_SHOWN_FILMS
    })).toEqual(Object.assign({}, mockInitialState, {
      shownFilmsNumber: filmsCount.PER_STEP
    }));
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();
    const filmsFromServer = films.map((film) => adaptFilmToServer(film));

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, filmsFromServer);

    return filmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: films,
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmPromoLoader = fetchPromoFilm();
    const filmFromServer = adaptFilmToServer(films[0]);

    apiMock
      .onGet(APIRoute.PROMO)
      .reply(200, filmFromServer);

    return filmPromoLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: films[0],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = fetchFavoriteFilms();
    const filmsFromServer = films.map((film) => adaptFilmToServer(film));

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, filmsFromServer);

    return favoriteFilmsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: films,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FAVORITES_IS_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to GET /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const commentsLoader = fetchComments(1);
    const commentsFromServer = comments.map((comment) => adaptCommentToServer(comment));

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, commentsFromServer);

    return commentsLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: comments,
        });
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_COMMENTS_IS_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const filmByIdLoader = fetchFilmById(1);
    const filmFromServer = adaptFilmToServer(films[0]);

    apiMock
      .onGet(`${APIRoute.FILMS}/${id}`)
      .reply(200, filmFromServer);

    return filmByIdLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_BY_ID,
          payload: films[0]
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_FILM_BY_ID_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to POST /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const postCommentLoader = sendComment(1, {rating: `3`, comment: `comment`});

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`, {rating: `3`, comment: `comment`})
      .reply(200, [{fake: true}]);

    return postCommentLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        // expect(dispatch).toHaveBeenNthCalledWith(1, {
        //   type: ActionType.SET_DATA_IS_SENDING,
        //   payload: false,
        // });
        // expect(dispatch).toHaveBeenNthCalledWith(1, {
        //   type: ActionType.REDIRECT_TO_ROUTE,
        //   payload: `${APIRoute.FILMS}/${id}`,
        // });
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const id = 1;
    const dispatch = jest.fn();
    const sendFavStatusLoader = sendFavoriteStatus(1, true);
    const filmFromServer = adaptFilmToServer(films[0]);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${StatusCode.REMOVE}`)
      .reply(200, filmFromServer);

    return sendFavStatusLoader(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        // expect(dispatch).toHaveBeenNthCalledWith(1, {
        //   type: ActionType.LOAD_PROMO,
        //   payload: films[0],
        // });
        // expect(dispatch).toHaveBeenNthCalledWith(1, {
        //   type: ActionType.LOAD_FILM_BY_ID,
        //   payload: films[0],
        // });
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.SET_FILM_BY_ID_LOADING,
        //   payload: false,
        // });
        // expect(dispatch).toHaveBeenNthCalledWith(2, {
        //   type: ActionType.SET_DATA_IS_SENDING,
        //   payload: false,
        // });
      });
  });

});
