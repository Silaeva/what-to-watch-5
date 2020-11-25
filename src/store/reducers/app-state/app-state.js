import {ActionType} from "../../action";

const initialState = {
  activeGenre: `All genres`,
  isLoading: true,
  isLoadingError: false
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        activeGenre: action.payload
      });
    case ActionType.TOGGLE_IS_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload
      });
    case ActionType.TOGGLE_IS_LOAD_ERROR:
      return Object.assign({}, state, {
        isLoadingError: action.payload
      });
  }

  return state;
};

export {appState};
