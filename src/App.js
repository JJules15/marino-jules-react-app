import './App.css';
import HomePage from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import BlogPost from "./blog";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Awards from "./pages/Awards";

function App() {
  return (
      <Router>
          <Header/>
          <main>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact-me" element={<Contact/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                  <Route path="/education" element={<Education/>}/>
                  <Route path="/awards" element={<Awards/>}/>
                  <Route path="/experience" element={<Experience/>}/>
                  <Route path="/blog" element={<BlogPost/>}/>
              </Routes>
          </main>
          <Footer/>
      </Router>
  );
}

export default App;