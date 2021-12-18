import {
  USERS_REQUEST,
  USERS_BAD_REQUEST,
  USERS_FILTER,
} from "../constants/usersConstants";
import UsersService from "../../services/UsersServices";

export const getUsers = () => async (dispatch) => {
  try {
    const data = await UsersService.getAll();

    dispatch({
      type: USERS_REQUEST,
      payload: data,
    });
    dispatch({
      type: USERS_FILTER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USERS_BAD_REQUEST,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterUsersList =
  (array, name, lastName, age, sex) => (dispatch) => {
    const filterArray = array.filter(
      (item) =>
        (!name || item.name.toLowerCase().includes(name.toLowerCase())) &&
        (!lastName ||
          item.lastname.toLowerCase().includes(lastName.toLowerCase())) &&
        (!age || item.age == age) &&
        ((sex.f && sex.m) || (!sex.f && !sex.m)
          ? item
          : (sex.f || item.sex == "m") && (sex.m || item.sex == "f"))
    );
    dispatch({
      type: USERS_FILTER,
      payload: filterArray,
    });
  };
