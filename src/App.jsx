import { useState } from 'react'
import './App.css'
import Home from "pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-dom";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App
