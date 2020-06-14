import axios from "axios";

export const requestUsersPending = () => {
  return {
    type: "REQUEST_USERS_PENDING",
  };
};

export const requestUsersSuccess = (data) => {
  return {
    type: "REQUEST_USERS_SUCCESS",
    isPending: false,
    payload: data,
  };
};

export const requestUsersFail = ({ message }) => {
  return {
    type: "REQUEST_USERS_FAIL",
    payload: message,
    isPending: false,
  };
};

export const requestUsers = () => (dispatch, getState) => {
  const pno = Math.floor(Math.random() * 200);
  dispatch(requestUsersPending());
  axios
    .get(`https://picsum.photos/v2/list?page=${pno}&limit=3`)
    .then(({ data }) => dispatch(requestUsersSuccess(data)))
    .catch((error) => dispatch(requestUsersFail(error)));
};
