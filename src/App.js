import './App.css';
import HomePage from "./Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import BlogPost from "./blog";
import BlogPage from "./BlogPage";
import {PlasmicRootProvider} from "@plasmicapp/loader";
import plasmicLoader from "./plasmic-init";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/blog/:id" element={<BlogPost/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
        </Routes>
      </Router>
  )
}

export default App;
