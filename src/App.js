import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import request from "./request";
import "./style/App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
