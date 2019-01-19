import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {loadActions, treat} from "../../actions";
import RoomAction from '../RoomAction';

class HospitalRoom extends Component {

  componentDidMount() {
    this.checkAndLoadActions();
  }

  componentDidUpdate() {
    this.checkAndLoadActions();
  }

  checkAndLoadActions = () => {
    if (!this.props.actions) {
      this.props.loadActions();
    }
  };

  render() {
    if (!this.props.actions) {
      return '';
    }

    const actions = this.props.actions.map(a => (
      <RoomAction action={a} handler={this.props.treat}/>
    ));

    return (
      <div className='actions animated fadeIn'>
        {actions}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actions: state.hospitalActions
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {loadActions, treat},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(HospitalRoom);
