import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import './App.css';
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch.js";

import TeamDetails from "./Components/TeamDetails/TeamDetails";






function App() {
  return (
    
       <Router>
         <Header/>
         
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route path="/home">
            <Home></Home>
            
            
          </Route>
          <Route path="/features">
            <TeamDetails></TeamDetails>
      

            
            
            
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>

            
            
            
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      
    </Router>
    
  );
}

export default App;
