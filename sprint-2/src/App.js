import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Components/HeaderComponents/Header/Header.js';
import Home from './Components/HomePageComponents/Home/Home.js';
import UploadVideo from './Components/VideoUploadComponents/UploadVideo/UploadVideo';
import MainVideo from './Components/HomePageComponents/Mainvideo/MainVideo'
import NextVideo from './Components/HomePageComponents/NextVideo/NextVideo';

function App() {
  
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route  exact path= '/' component={Home} />
        <Route path= '/UploadVideo' component={UploadVideo} />
        <Route path =  '/video/:id' component={Home}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
