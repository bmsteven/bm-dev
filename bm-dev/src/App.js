import React from "react";

//dependencies
import { Switch, Route } from "react-router-dom";

//pages
// import Home from "./pages/Home"
import Corona from "./pages/Corona";

//styles
import "./styles/style.css";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <div className='container'>
            <h1>Hello, welcome to my website</h1>
          </div>
        </Route>
        <Route exact path='/corona-updates' component={Corona} />
        <Route>
          <div className='container'>
            <h1>Error 404</h1>
            <p>Page not found</p>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
