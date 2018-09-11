export const loginUser = (email, password, history) => {
  return dispatch => {
    // console.log(email, password)
    dispatch(authenticatingUser());
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      // .then(res => console.log(res))
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        dispatch(setCurrentUser(res.user));
        // console.log(res.user)
      })
      // .catch(r => r.json())
      // .then(e => dispatch(failedLogin(e.message)))
      .then(history.push("/selectuser"))
      .catch(r => r.json().then(e => dispatch(failedLogin(e.message))));
  };
};

export const fetchCurrentUser = () => {
  return dispatch => {
    dispatch(authenticatingUser());
    fetch("http://localhost:3000/api/v1/loggedin", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(user => {
        console.log('fetchCurrentUser', localStorage.getItem("jwt"), user)
        // localStorage.setItem("jwt", res.jwt);
        dispatch(setCurrentUser(user))
        console.log('after setting')
        // dispatch({ type: 'AUTHENTICATED_USER' })
      })
      .catch(r => r.json().then(e => dispatch(failedLogin(e.message))));
  };
};

export const setCurrentUser = userData => ({

  type: "SET_CURRENT_USER",
  payload: userData
});

export const failedLogin = errorMsg => ({
  type: "FAILED_LOGIN",
  payload: errorMsg
});

export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });
