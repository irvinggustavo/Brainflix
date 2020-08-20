import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/HeaderComponents/Header/Header.js";
import Home from "./Components/HomePageComponents/Home/Home.js";
import UploadVideo from "./Components/VideoUploadComponents/UploadVideo/UploadVideo";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/UploadVideo" component={UploadVideo} />
          <Route path="/:videoId" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
