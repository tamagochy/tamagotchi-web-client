import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {changeRoom} from "../actions";
import ChangeRoom from "./ChangeRoom";

import feedingImg from "../../img/feeding.png";
import sleepImg from "../../img/moon.png";
import pillsImg from "../../img/pills.png";
import gamepadImg from "../../img/abc-block.png";
import diningroomImg from "../../img/diningroom.png"
import bedroomImg from "../../img/bedroom.png"
import hospitalImg from "../../img/hospital.png"
import playroomImg from "../../img/playroom.png"

class RoomButtons extends Component{
  goKitchen = () => {
    this.props.changeRoom('kitchen');
    document.getElementById('body').style.background = `url(${diningroomImg})`;
  }

  goBedroom = () => {
    this.props.changeRoom('bedroom');
    document.getElementById('body').style.background = `url(${bedroomImg})`;
  }

  goHospital = () => {
    this.props.changeRoom('hospital');
    document.getElementById('body').style.background = `url(${hospitalImg})`;
  }

  goPlayRoom = () => {
    this.props.changeRoom('playroom');
    document.getElementById('body').style.background = `url(${playroomImg})`;
  }

  render() {
    const enabled = this.props.pet && this.props.pet.active;

    return (
      <div className="mx-auto row justify-content-md-center p-4 animated slideInUp">
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
