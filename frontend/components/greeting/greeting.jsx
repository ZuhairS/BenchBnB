import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {

  render() {

    const currentUser = this.props.currentUser;
    const logout = this.props.logout;
    
    if (currentUser) {
      return (
        <div className="logged-greeting">
          <h1>Hello { currentUser.username }!</h1>
          <button onClick={() => logout()}>Logout</button>
        </div>
      );
    } else {
      return (
      <div className="unlogged-greeting">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
      );
    }
  }
}