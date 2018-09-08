const defaultState = {
  currentUser: null
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PROFILE":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      };

    default:
      return state;
  }
};

export default profileReducer;
