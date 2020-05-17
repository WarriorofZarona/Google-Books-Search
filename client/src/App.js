import React from "react";
import "./App.css";
import Search from "./pages/Search";
import API from "./utils/API";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  function searchBook() {
    API.getBooks("Harry Potter")
      .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };

  return (
    <Router>
      <Navbar />
      <Search searchBook={searchBook} />
      <h1>Test</h1>
    </Router>
  )
}

export default App;
