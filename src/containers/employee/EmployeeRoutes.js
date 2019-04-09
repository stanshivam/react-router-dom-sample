import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EmployeeRoutes extends Component {
  render() {
    const { match } = this.props;
    return (
        <div>
          <Link to={`${match.url}/dashboard`}>Dashboard</Link>
          <Route path={`${match.path}/dashboard`} component={() => <p>admin dashboard</p>} />
          <Route
            exact
            path={match.path}
            render={() => <h3>Please go to employee dashboard.</h3>}
          />
        </div>
    );
  }
}

export default EmployeeRoutes;
