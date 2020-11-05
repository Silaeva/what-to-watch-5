import {ActionType} from "../../action";
import {filmsCount} from "../../../const";

const initialState = {
  activeGenre: `All genres`,
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
  }

  return state;
};

export {appState};
