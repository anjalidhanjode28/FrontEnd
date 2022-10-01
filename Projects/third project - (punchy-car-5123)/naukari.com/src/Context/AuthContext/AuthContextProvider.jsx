import React, {useReducer} from "react";
import reducer  from "./reducer";

export const AuthContext = React.createContext();

const initState = {
  isLoading: false,
  isAuth: false,
  isError: false,
};

const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
      <AuthContextProvider value={{ state,dispatch }}>
        {children}
      </AuthContextProvider>
  );
};

export default AuthContextProvider;
