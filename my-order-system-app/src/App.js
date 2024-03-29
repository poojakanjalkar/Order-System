import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Users/pages/Users";
import UserProducts from "./Products/pages/UserProducts";
import MainNavigation from "./SHARED/components/Navigation/MainNavigation";
import NewProduct from "./Products/pages/NewProduct";
import UpdateProduct from "./Products/pages/UpdateProduct";
import Auth from "./Users/pages/Auth";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact={true} Component={Users} />
          <Route path="/products/new" Component={NewProduct} />
          <Route path="/products/:productId" Component={UpdateProduct} />
          <Route path="/:userId/products" exact Component={UserProducts} />
          <Route path="/authenticate" exact Component={Auth}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
