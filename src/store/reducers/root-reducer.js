import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {filmsData} from "./films-data/films-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.STATE]: appState,
  [NameSpace.USER]: user
});
