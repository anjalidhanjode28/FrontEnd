// reducer related to auth state;

export default function authReducer(state, actions) {
  switch (actions.type) {
    case "LOGIN_SUCCESS":
      return { ...state, token: actions.payload, authstatus: true };
    case "LOGIN_FAILURE":
      return { ...state, isError: actions.payload };
    case "LOGIN_REQUEST":
      return { ...state, isLoading: actions.payload };
    default:
      return state;
  }
}
