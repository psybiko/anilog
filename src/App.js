import React from "react";
import "./App.css";
import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  const test = () => {
    Axios({
      method: "GET",
      url: "https://kitsu.io/api/edge/anime?filter[categories]=adventure",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json"
      }
    }).then(res => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <button onClick={test}>Click here</button>
    </div>
  );
}

export default App;
