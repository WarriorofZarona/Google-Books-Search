import React from "react";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  function searchBook() {
    API.getBooks("Harry Potter")
      .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };

  return (
    <Router>
      <Navbar />
      <br />
      <Header />
      <Route exact path={["/", "/search"]}>
        <Search searchBook={searchBook} />
      </Route>
      <Route exact path="/saved">
        <Saved />
      </Route>
    </Router>
  )
}

export default App;
