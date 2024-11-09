// import { createContext, useReducer } from 'react';

// export const AuthContext = createContext();

// const initialState = {
//   user: null,
//   role: null,
//   tokenAccess: null,
//   tokenRefresh: null,
//   token: null,
// };

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         user: action.payload.user,
//         role: action.payload.role,
//         tokenAccess: action.payload.access,
//         tokenRefresh: action.payload.refresh,
//         token: action.payload.token,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         user: null,
//         role: null,
//         tokenAccess: null,
//         tokenRefresh: null,
//         token: null,
//       };
//     default:
//       return state;
//   }
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useReducer, useEffect } from 'react';

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
        tokenAccess: action.payload.tokenAccess,
        tokenRefresh: action.payload.tokenRefresh,
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

  useEffect(() => {
    const tokenAccess = localStorage.getItem('tokenAccess');
    const tokenRefresh = localStorage.getItem('tokenRefresh');
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');

    if (tokenAccess) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user: username,
          role: role,
          tokenAccess: tokenAccess,
          tokenRefresh: tokenRefresh,
        },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};