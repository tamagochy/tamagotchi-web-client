import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { feed, play, sleep, treat } from '../actions/pet_actions';

class Rooms extends Component {

  render() {
    return (
      <div className="fixed-bottom mx-auto row justify-content-md-center p-4 animated slideInUp">
        <div className="col-1">
          <button type="button" className="btn btn-light btnr" onClick={(e) => { this.props.feed() }}>
            <img className="btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/feeding.png" alt="" />
          </button>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-light btnr" onClick={(e) => { this.props.sleep() }}>
            <img className="btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/zzz-sleep-symbol.png" alt="" />
          </button>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-light btnr" onClick={(e) => { this.props.treat() }}>
            <img className="btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/pills.png" alt="" />
          </button>
        </div>
        <div className="col-1 btn-group dropright">
          <button type="button"
            className="btn btn-light btnr dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img className="btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/gamepad.png" alt="" />
          </button>
          <div className="dropdown-menu dpmenu">
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('brush') }}>
              <img className="drop-btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/inclined-hairbrush.png" alt="" />
            </button>
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('playTicTacToe') }}>
              <img className="drop-btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/tic-tac-toe.png" alt="" />
            </button>
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('takePicture') }}>
              <img className="drop-btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/camera.png" alt="" />
            </button>
            <button type="button" className="dropdown-item btn btn-light btnr" onClick={(e) => { this.props.play('playBall') }}>
              <img className="drop-btn-image" src="https://res.cloudinary.com/sedwin/image/upload/v1540842222/soccer-ball-variant.png" alt="" />
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