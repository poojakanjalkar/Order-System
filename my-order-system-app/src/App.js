import React, { useCallback, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes,
} from "react-router-dom";
import "./App.css";
import Users from "./Users/pages/Users";
import UserProducts from "./Products/pages/UserProducts";
import MainNavigation from "./SHARED/components/Navigation/MainNavigation";
import NewProduct from "./Products/pages/NewProduct";
import UpdateProduct from "./Products/pages/UpdateProduct";
import Auth from "./Users/pages/Auth";
import { AuthContext } from "./SHARED/FORMELEMENTS/context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    //useCallback is used to not recreate it unnecessary to avoid infinite loop
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/products" exact>
          <UserProducts />
        </Route>
        <Route path="/products/new" exact>
          <NewProduct />
        </Route>
        <Route path="/products/:productId">
          <UpdateProduct />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/products" exact>
          <UserProducts />
        </Route>
        <Route path="/authenticate" exact>
          <Auth />
        </Route>
        <Redirect to="/authenticate" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
