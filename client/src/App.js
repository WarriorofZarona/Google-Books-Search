import React from "react";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <br />
      <Header />
      <Route exact path={["/", "/search"]}>
        <Search />
      </Route>
      <Route exact path="/saved">
        <Saved />
      </Route>
    </Router>
  )
}

export default App;
