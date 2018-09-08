const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  error: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      };
    case "AUTHENTICATING_USER":
      return { ...state, authenticatingUser: true };
    case "AUTHENTICATED_USER":
      return { ...state, authenticatingUser: false };
    case "FAILED_LOGIN":
      return {
        ...state,
        loggedIn: false,
        error: action.payload,
        authenticatingUser: false
      };
    default:
      return state;
  }
};

export default userReducer;
