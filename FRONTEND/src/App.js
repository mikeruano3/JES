import React, { useState, useEffect } from "react";
import { deployPrefix } from "./config";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AuthService from "./services/auth.service";
import Login from "./components/User/Login";
import Profile from "./components/User/Profile";

import FiscaliaList from './components/Fiscalia/FiscaliaList';
import AddFiscalia from './components/Fiscalia/AddFiscalia';
import Fiscalia from './components/Fiscalia/Fiscalia';
import Home from "./components/Home/Home";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  let match = useRouteMatch();

  useEffect(() => {
    /*const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }*/
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href={currentUser ? `${deployPrefix}/projects` : `${deployPrefix}/home`} className="navbar-brand">
            Dashboard
          </a>
          <div className="navbar-nav mr-auto">
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={`${deployPrefix}/fiscaliaslist`} className="nav-link">
                    Fiscalias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`${deployPrefix}/addfiscalias`} className="nav-link">
                    AddFiscalia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`${deployPrefix}/login`} className="nav-link">
                    Login
                  </Link>
                </li>
              </div>
          </div>

        </nav>
        <div className="container mt-3">
          <Route exact path={`${deployPrefix}/login`} component={Login} />
          <Switch>
              <Route exact path={[`${deployPrefix}/`, `${deployPrefix}/fiscaliaslist`]} component={FiscaliaList} />
              <Route exact path={`${deployPrefix}/addfiscalias`} component={AddFiscalia} />
              <Route exact path={`${deployPrefix}/home`} component={Home} />
              <Route path={`${deployPrefix}/fiscalia/:id`} component={Fiscalia} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
