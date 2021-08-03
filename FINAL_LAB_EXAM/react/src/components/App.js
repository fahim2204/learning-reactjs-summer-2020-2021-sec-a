import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Home';
import EditCategory from './EditCategory';
import Login from './shop/Login'
import Register from './shop/Register'
import AdminHome from './shop/AdminHome'
import EmployeeHome from './shop/EmployeeHome'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
              <Login/>
          </Route>
          <Route exact path="/admin">
              <AdminHome/>
          </Route>
          <Route exact path="/employee">
              <EmployeeHome/>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

{/* <Router>
  <Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/edit">
        <EditCategory/>
    </Route>
  </Switch>
</Router> */}