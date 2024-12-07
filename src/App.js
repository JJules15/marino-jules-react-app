import './App.css';
import HomePage from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import BlogPost from "./blog";
import BlogPage from "./BlogPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

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
          <Header/>
          <main>
              <Routes>
                  <Route path="" element={<HomePage/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact-me" element={<Contact/>}/>
                  <Route path="/skills" element={<Skills/>}/>
              </Routes>
          </main>
      </Router>
  );
}

export default App;