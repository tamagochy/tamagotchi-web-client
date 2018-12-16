import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {logout} from "../actions";
import React from "react";

export class LogoutButton extends Component {

  onLogout = () => this.props.logout();

  render() {
    if (!this.props.show) {
      return '';
    }

    return (
      <p>
        <button className='login-link' onClick={this.onLogout}>Закончить играть</button>
      </p>
    );
  }
}

const mapStateToProps = (state) => ({
  show: state.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {logout},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
