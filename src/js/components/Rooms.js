import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { feed, play, sleep, treat } from '../actions/pet_actions';

import feedingImg from '../../img/feeding.png'
import sleepImg from '../../img/zzz-sleep-symbol.png'
import pillsImg from '../../img/pills.png'
import gamepadImg from '../../img/gamepad.png'
import brushImg from '../../img/inclined-hairbrush.png'
import ticTacToeImg from '../../img/tic-tac-toe.png'
import cameraImg from '../../img/camera.png'
import ballImg from '../../img/soccer-ball-variant.png'

class Rooms extends Component {

  render() {
    return (
      <div className="fixed-bottom mx-auto row justify-content-md-center p-4 animated slideInUp">
        <div className="col-1">
          <button type="button" className="btn btn-light btnr" onClick={(e) => { this.props.feed() }}>
            <img className="btn-image" src={feedingImg} alt="" />
          </button>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-light btnr" onClick={(e) => { this.props.sleep() }}>
            <img className="btn-image" src={sleepImg} alt="" />
          </button>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-light btnr" onClick={(e) => { this.props.treat() }}>
            <img className="btn-image" src={pillsImg} alt="" />
          </button>
        </div>
        <div className="col-1 btn-group dropright">
          <button type="button"
            className="btn btn-light btnr dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img className="btn-image" src={gamepadImg} alt="" />
          </button>
          <div className="dropdown-menu dpmenu">
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('brush') }}>
              <img className="drop-btn-image" src={brushImg} alt="" />
            </button>
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('playTicTacToe') }}>
              <img className="drop-btn-image" src={ticTacToeImg} alt="" />
            </button>
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('takePicture') }}>
              <img className="drop-btn-image" src={cameraImg} alt="" />
            </button>
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('playBall') }}>
              <img className="drop-btn-image" src={ballImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { feed, play, sleep, treat },
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(Rooms);