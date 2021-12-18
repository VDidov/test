import {
  USERS_REQUEST,
  USERS_BAD_REQUEST,
  USERS_FILTER,
} from "../constants/usersConstants";

export const usersReducer = (
  state = {
    usersList: [],
    filterList: [],
    isLoading: true,
    errorMassage: null,
  },
  action
) => {
  switch (action.type) {
    case USERS_REQUEST:
      return { ...state, isLoading: false, usersList: action.payload };
    case USERS_BAD_REQUEST:
      return { ...state, errorMassage: action.payload };
    case USERS_FILTER:
      return { ...state, filterList: action.payload };
    default:
      return state;
  }
};
