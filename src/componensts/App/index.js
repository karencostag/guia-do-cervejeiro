import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// import List from "../List";
import Routers from "../../router";
import "./style.css";

const App = () => (
  <div className="app">
    <Header />
    <Routers />
    <Footer />
  </div>
);

export default App;

