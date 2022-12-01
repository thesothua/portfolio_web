// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import { Switch , Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service/>} />
        {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Navigate to="/" /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
