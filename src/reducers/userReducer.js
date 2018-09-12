const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      // console.log('SET_CURRENT_USER')
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      };
    case "AUTHENTICATING_USER":
      // console.log('AUTHENTICATING_USER')
      return { ...state, authenticatingUser: true };
    case "AUTHENTICATED_USER":
      // console.log('AUTHENTICATED_USER')
      return { ...state, authenticatingUser: false };
    case "FAILED_LOGIN":
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      };
    default:
      return state;
  }
};

export default userReducer;
