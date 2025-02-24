import { useState } from 'react'
import './App.css'
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-dom";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Home} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App
