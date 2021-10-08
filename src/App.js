import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <h1>Let's Build a Netflix Clone Today!</h1>
      <Row
        title="NETFLIX ORIGIANLS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
