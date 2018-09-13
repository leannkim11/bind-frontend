const initialState = {
  job_post: []
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB_POST":
      return {
        ...state,
        job_post: action.payload
      };
    case "DELETE_JOB_POST":

      return {
        ...state,
        job_post: action.payload
      }
    default:
      return state;
  }
};

export default jobReducer;
