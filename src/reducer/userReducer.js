const dataDefaultState = {
  users: [],
  isPending: "",
  error: "",
};

export default (state = dataDefaultState, action = {}) => {
  switch (action.type) {
    case "REQUEST_USERS_PENDING":
      return {
        ...state,
        isPending: true,
        error: "",
      };
    case "REQUEST_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        isPending: false,
      };
    case "REQUEST_USERS_FAIL":
      return {
        ...state,
        error: action.payload,
        users: {},
        isPending: false,
      };
    default:
      return state;
  }
};
