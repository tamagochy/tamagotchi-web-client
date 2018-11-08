import React, { Component } from "react";
import { Link } from "react-router-dom";


class Authorization extends Component {

  render() {
    return (
      <div className="login animated slideInDown">
        <h2 className="login-header">Log in</h2>

        <form className="login-container">
          <p><input type="email" placeholder="Email" /></p>
          <p><input type="password" placeholder="Password" /></p>
          <p>
            <Link to={`/home`}>
              <input type="submit" value="Log in" />
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Authorization;