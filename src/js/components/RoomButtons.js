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
    return (
      <div className="fixed-bottom mx-auto row justify-content-md-center p-4 animated slideInUp">
        <ChangeRoom handler={this.goKitchen} image={feedingImg}/>
        <ChangeRoom handler={this.goBedroom} image={sleepImg}/>
        <ChangeRoom handler={this.goHospital} image={pillsImg}/>
        <ChangeRoom handler={this.goPlayRoom} image={gamepadImg}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {changeRoom},
  dispatch
);

export default connect(null, mapDispatchToProps)(RoomButtons);
