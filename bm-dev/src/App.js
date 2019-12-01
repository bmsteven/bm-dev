import React from 'react';

//dependencies
import { Switch, Route } from "react-router-dom"

//pages
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
