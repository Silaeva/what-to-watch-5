const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  CLEAR_SHOWN_FILMS: `CLEAR_SHOWN_FILMS`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`
};

const ActionCreator = {
  changeFilter: (genre) => ({
    type: ActionType.CHANGE_FILTER,
    payload: genre
  }),
  getFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre
  }),
  clearShownFilms: () => ({
    type: ActionType.CLEAR_SHOWN_FILMS,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  })
};

export {ActionType, ActionCreator};
