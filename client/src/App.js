import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
        <Footer/>
      </Router>
    );
}

export default App;
