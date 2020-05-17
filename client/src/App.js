import React from "react";
import "./App.css";
import Search from "./pages/Search";
import API from "./utils/API";
import { PromiseProvider } from "mongoose";

function App() {

  function searchBook() {
    API.getBooks("Harry Potter")
      .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Search searchBook={searchBook} />
      <h1>Test</h1>
    </div>
  )
}

export default App;
