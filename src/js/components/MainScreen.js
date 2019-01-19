import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PetState from './PetState'
import CurrentRoom from './CurrentRoom'
import RoomButtons from './RoomButtons'

class MainScreen extends Component {
  render() {
    return (
      <div>
        <PetState/>
        <CurrentRoom/>
        <RoomButtons/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet,
  petExists: state.petExists
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
