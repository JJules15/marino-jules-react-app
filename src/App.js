import logo from './logo.svg';
import './App.css';
import HomePage from "./Home";
import BlogPost from "./BlogPost";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Post1 from "./post1";

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
        </Routes>
      </Router>
  )
}

export default App;
