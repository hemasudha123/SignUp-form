import React, { useReducer, createContext } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

import { initialState, reducer } from "./reducer/UseReducer";

// we create a contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
      </Switch>
    </>
  );
};

const App = () => {
  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Routing />
    </UserContext.Provider>
  );
};

export default App;
