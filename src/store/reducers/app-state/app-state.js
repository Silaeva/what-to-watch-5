import {ActionType} from "../../action";
import {filmsCount} from "../../../const";

const initialState = {
  activeGenre: `All genres`,
  isloading: true,
  isLoadingError: false
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        activeGenre: action.payload
      });
    case ActionType.CLEAR_SHOWN_FILMS:
      return Object.assign({}, state, {
        shownFilmsNumber: filmsCount.PER_STEP
      });
    case ActionType.TOGGLE_IS_LOADING:
      return Object.assign({}, state, {
        isloading: action.payload
      });
    case ActionType.TOGGLE_IS_LOAD_ERROR:
      return Object.assign({}, state, {
        isLoadingError: action.payload
      });
  }

  return state;
};

export {appState};
