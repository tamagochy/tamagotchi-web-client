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
    const pet = this.props.pet;
    if (!pet || !pet.active) {
      return '';
    }
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
    return this.getCurrentRoomComponent();
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet,
  room: state.currentRoom
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentRoom);
