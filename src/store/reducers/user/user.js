import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInProgress: true
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHECK_AUTH_PROGRESS:
      return Object.assign({}, state, {
        authInProgress: action.payload,
      });
  }

  return state;
};

export {user};
