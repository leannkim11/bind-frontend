export const fetchJobPost = () => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => dispatch(addJobPost(data)));
  };
};

export const addJobPost = jobData => ({
  type: "ADD_JOB_POST",
  payload: jobData
});
