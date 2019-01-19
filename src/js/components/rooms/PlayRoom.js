import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {loadActions, play} from "../../actions";
import RoomAction from '../RoomAction';

class PlayRoom extends Component {

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
      <RoomAction key={a.code} action={a} handler={this.props.play}/>
    ));

    return (
      <div className='actions animated fadeIn'>
        {actions}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actions: state.actions.play
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {loadActions, play},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(PlayRoom);
