import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainLayout extends Component {
  render() {
      const { match } = this.props;
    return (
        <div>
          <p>
            -----------Navbar Start----------
            <Link to={`${match.url}/dashboard`}>Dashboard</Link> |
            <Link to={`${match.url}/employee`}> Manage Employees</Link>
            -----------Navbar End----------
          </p>
          <span>Sidebar | </span> {this.props.children}
        </div>
    );
  }
}

export default MainLayout;
