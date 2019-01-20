import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {changeRoom} from "../actions";
import ChangeRoom from "./ChangeRoom";

import feedingImg from "../../img/feeding.png";
import sleepImg from "../../img/moon.png";
import pillsImg from "../../img/pills.png";
import gamepadImg from "../../img/abc-block.png";

class RoomButtons extends Component{
  goKitchen = () => this.props.changeRoom('kitchen');

  goBedroom = () => this.props.changeRoom('bedroom');

  goHospital = () => this.props.changeRoom('hospital');

  goPlayRoom = () => this.props.changeRoom('playroom');

  render() {
    const enabled = this.props.pet && this.props.pet.active;

    return (
      <div className="fixed-bottom mx-auto row justify-content-md-center p-4 animated slideInUp">
        <ChangeRoom handler={this.goKitchen} image={feedingImg} enabled={enabled} description="На кухню"/>
        <ChangeRoom handler={this.goBedroom} image={sleepImg} enabled={true} description="В спальню"/>
        <ChangeRoom handler={this.goHospital} image={pillsImg} enabled={enabled} description="К аптечке"/>
        <ChangeRoom handler={this.goPlayRoom} image={gamepadImg} enabled={enabled} description="В игровую комнату"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {changeRoom},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(RoomButtons);
