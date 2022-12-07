import { createContext } from "react";
//React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
//In other words, React context allows us to share data (state) across our components more easily.

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
});

//object that can shared between components, and when updated, comopnents that listen to this will be updated also

//Context in React will allow users to pass data between any components in the application without using PROPS
// useful for data such as "is user logged in?"  Passing data for this through props would be a nightmare
