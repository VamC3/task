import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import './App.css';
import PrivateRoute from './Routes/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'><Home></Home></Route>
          {/* <PrivateRoute path='/dashboard'><Dashboard></Dashboard></PrivateRoute> */}
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route path='/signup'><Signup></Signup></Route>
          <Route path='/login'><Login></Login></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;




