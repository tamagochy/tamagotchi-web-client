import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {sleep} from "../actions";

class SleepAction extends Component {

  sleep = () => this.props.sleep();

  render() {
    return (
      <button type="button" className="btn btn-light btn-action" onClick={this.sleep}>
        Уложить спать
      </button>
    );
  }
}

  const mapDispatchToProps = dispatch => bindActionCreators(
  {sleep},
  dispatch
);

export default connect(null, mapDispatchToProps)(SleepAction);
