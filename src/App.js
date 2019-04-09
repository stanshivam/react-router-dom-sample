import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import AdminRoutes from './containers/admin/AdminRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <p><Link to={'/'}>Root |</Link>
          <Link to={'/admin'}> Admin</Link> |
          <Link to={'/login'}> Login</Link></p>
          <Switch>
            <Route exact path={'/'} component={() => <p>at root</p>} />
            <Route path={'/admin'} component={AdminRoutes} />
            <Route path={'/employee'} component={() => <p>employee</p>} />
            <Route path={'/login'} component={() => <p>Login Component</p>} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
