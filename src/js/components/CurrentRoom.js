import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import PlayRoom from './rooms/PlayRoom';
import BedRoom from './rooms/BedRoom';
import KitchenRoom from './rooms/KitchenRoom';
import HospitalRoom from './rooms/HospitalRoom';

class CurrentRoom extends Component {

  getCurrentRoomComponent = () => {
    const code = this.props.room;
    if (code === 'playroom') {
      return <PlayRoom/>;
    }
    if (code === 'bedroom') {
      return <BedRoom/>
    }
    if (code === 'kitchen') {
      return <KitchenRoom/>
    }
    if (code === 'hospital') {
      return <HospitalRoom/>
    }
    return '';
  };

  render() {
    return (
      <div>
        {this.getCurrentRoomComponent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.currentRoom
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRoom);
