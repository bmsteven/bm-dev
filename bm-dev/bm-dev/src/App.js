import React from "react";

//dependencies
import { Switch, Route } from "react-router-dom";

//pages
// import Home from "./pages/Home"
import CoronaHome from "./pages/CoronaHome"
import Corona from "./pages/Corona";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

//styles
import "./styles/styles.css";

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <CoronaHome/>
        </Route>
        <Route exact path='/corona-updates' component={Corona} />
        <Route>
          <div className='container'>
            <h1>Error 404</h1>
            <p>Page not found</p>
          </div>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
