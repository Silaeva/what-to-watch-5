
const filmsCount = {
  PER_STEP: 8,
  SIMILAR: 4
};

const FilmTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const AppRoute = {
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  REVIEW: `/films/:id/review`,
  ROOT: `/`,
  PLAYER: `/player/`,
  PLAYER_ID: `/player/:id`,
  FILMS: `/films/`,
  FILMS_ID: `/films/:id`
};

const APIRoute = {
  ROOT: `/`,
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments/`,
  LOGIN: `/login`,

};

export {filmsCount, FilmTab, AuthorizationStatus, AppRoute, APIRoute};
