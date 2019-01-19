import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {loadActions, feed} from "../../actions";
import RoomAction from '../RoomAction';

class KitchenRoom extends Component {

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

  getActions = () => {
    let actions = this.props.actions.slice();
    actions.sort(() => Math.random() - 0.5);
    return actions.slice(0, 4);
  };

  render() {
    if (!this.props.actions) {
      return '';
    }

    const actions = this.getActions().map(a => (
      <RoomAction key={a.code} action={a} handler={this.props.feed}/>
    ));

    return (
      <div className='actions animated fadeIn'>
        {actions}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actions: state.kitchenActions
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {loadActions, feed},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(KitchenRoom);
