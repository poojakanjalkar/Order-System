import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Users/pages/Users";
import UserProducts from "./Products/pages/UserProducts";
import MainNavigation from "./SHARED/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact={true} Component={Users} />
          <Route path="/products/new" Component={UserProducts} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
