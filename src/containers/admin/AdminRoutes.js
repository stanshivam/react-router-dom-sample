import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminDashboard from './AdminDashboard';
import MainLayout from '../../layouts/MainLayout';

class AdminRoutes extends Component {
  render() {
    const { match } = this.props;
    return (
      <MainLayout match={match}>
        <div>
          <Switch>
            <Route path={`${match.path}/dashboard`} component={AdminDashboard} />
            <Route path={`${match.path}/employee`} component={() => <p>Create edit employee here</p>} />
            <Route
              exact
              path={match.path}
              render={() => <h3>Please go to Admin dashboard.</h3>}
            />
          </Switch>
          
        </div>
      </MainLayout>
    );
  }
}

export default AdminRoutes;
