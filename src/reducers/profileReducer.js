const defaultState = {
  enteredAsSeeker: false,
  enteredAsInsider: false
};

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER_TYPE_SEEKER":
      return {
        ...state,
        enteredAsSeeker: true
      };
    case "SET_USER_TYPE_INSIDER":
      return {
        ...state,
        enteredAsInsider: true
      };
    default:
      return state;
  }
};

export default profileReducer;
