import {ActionType} from "../../action";
import {appState} from "./app-state";
import {genre} from "../../../test-data";

const mockInitialState = {
  activeGenre: `All genres`,
  isLoading: true,
  isLoadingError: false
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appState(void 0, {})).toEqual(mockInitialState);
});

describe(`App-state reducer should update state`, () => {
  it(`by changing activeGenre`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.CHANGE_FILTER,
      payload: genre,
    })).toEqual(Object.assign({}, mockInitialState, {
      activeGenre: genre
    }));
  });

  it(`while films is loading`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.TOGGLE_IS_LOADING,
      payload: true,
    })).toEqual(Object.assign({}, mockInitialState, {
      isLoading: true
    }));
  });

  it(`on films load error`, () => {
    expect(appState(mockInitialState, {
      type: ActionType.TOGGLE_IS_LOAD_ERROR,
      payload: true,
    })).toEqual(Object.assign({}, mockInitialState, {
      isLoadingError: true
    }));
  });
});
