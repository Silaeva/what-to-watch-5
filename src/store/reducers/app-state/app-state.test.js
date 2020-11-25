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

it(`Reducer should change filter by a genre`, () => {
  expect(appState(mockInitialState, {
    type: ActionType.CHANGE_FILTER,
    payload: genre,
  })).toEqual(Object.assign({}, mockInitialState, {
    activeGenre: genre
  }));
});
