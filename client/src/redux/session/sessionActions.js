export const ActionType = {
  LOGIN_REQUEST: "session/LOGIN_REQUEST",
  LOGIN_SUCCESS: "session/LOGIN_SUCCESS",
  LOGIN_ERROR: "session/LOGIN_ERROR",
  SIGNUP_REQUEST: "session/SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "session/SIGNUP_SUCCESS",
  SIGNUP_ERROR: "session/SIGNUP_ERROR",
  LOGOUT: "session/LOGOUT",
  REFRESH_USER_REQUEST: "session/REFRESH_USER_REQUEST",
  REFRESH_USER_SUCCESS: "session/REFRESH_USER_SUCCESS",
  REFRESH_USER_ERROR: "session/REFRESH_USER_ERROR"
};

export const signupRequest = () => ({
  type: ActionType.SIGNUP_REQUEST
});

export const signupSuccess = response => ({
  type: ActionType.SIGNUP_SUCCESS,
  payload: {
    response
  }
});

export const signupError = error => ({
  type: ActionType.SIGNUP_ERROR,
  payload: {
    error
  }
});

export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST
});

export const loginSuccess = response => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: {
    response
  }
});
export const loginError = error => ({
  type: ActionType.LOGIN_ERROR,
  payload: {
    error
  }
});

export const auth = () => ({
  type: ActionType.SIGNUP_REQUEST
});

export const logOutSuccess = () => ({
  type: ActionType.LOGOUT
});

export const refreshUserRequest = () => ({
  type: ActionType.REFRESH_USER_REQUEST
});

export const refreshUserSuccess = user => ({
  type: ActionType.REFRESH_USER_SUCCESS,
  payload: { user }
});

export const refreshUserError = error => ({
  type: ActionType.REFRESH_USER_ERROR,
  payload: { error }
});
