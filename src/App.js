import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Blog from "./blog";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Post1 from "./Post1";

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
            <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<Blog/>}/>
        </Routes>
      </Router>
  )
}

export default App;
