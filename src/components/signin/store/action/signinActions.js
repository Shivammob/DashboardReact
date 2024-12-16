// export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
// export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
// export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const signInRequest = () => ({
  type: "SIGN_IN_REQUEST",
});

export const signInSuccess = (data) => ({
  type: "SIGN_IN_SUCCESS",
  payload: data,
});

export const signInFailure = (error) => ({
  type: "SIGN_IN_FAILURE",
  payload: error,
});

export const userLogSuccess = (data) => ({
  type: "USER_LOGGED_IN",
  payload: data,
});

export const userLogFailure = (error) => ({
  type: "USER_ERROR",
  payload: error,
});

export const signOutSuccess = (data) => ({
  type: "SIGN_OUT",
  payload: data,
});

export const signOutFail = (error) => ({
  type: "SIGN_OUT_ERROR",
  payload: error,
});

export const signIn = (userData) => {
  return async (dispatch) => {
    dispatch(signInRequest());
    try {
      const response = await fetch("http://localhost:5000/sign_in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      // console.log("Response from server:", result);
      if (result.success) {
        dispatch(signInSuccess(result));
        dispatch(fetchUser());
        // navigate("/");
      } else {
        // toast(result.error || "Login failed. Please try again.", {
        //   progressStyle: { position: "top-right", backgroundColor: "red" },
        // });
        dispatch(
          signInFailure(result.error || "Login failed. Please try again.")
        );
      }
    } catch (error) {
      // toast("Error sending data to server:", error, {
      //   progressStyle: { position: "top-right", backgroundColor: "red" },
      // });
      // console.error("Error sending data to server", error);
      dispatch(signInFailure("Error sending data to server:", error));
    }
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "GET",
        credentials: "include", // Include cookies with the request
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(userLogSuccess(data));
      } else {
        dispatch(userLogFailure("Failed to fetch user data"));
      }
    } catch (error) {
      dispatch(userLogFailure("Error fetching user data:", error));
    }
  };
};

export const handleSignOut = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/sign_out", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        // const data = await response.json();
        dispatch(signOutSuccess(null));
        dispatch(navigate("/sign-in"));
        // console.log('Sign out successful');
      } else {
        dispatch(signOutFail("Sign out failed"));
        // console.error('Sign out failed');
      }
    } catch (error) {
      dispatch(signOutFail("Error signing out:", error));
      // console.error('Error signing out:', error);
    }
  };
};
