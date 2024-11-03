import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
  user: null,
  role: null,
  tokenAccess: null,
  tokenRefresh: null,
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        tokenAccess: action.payload.acces,
        tokenRefresh: action.payload.refresh,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        role: null,
        tokenAccess: null,
        tokenRefresh: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};