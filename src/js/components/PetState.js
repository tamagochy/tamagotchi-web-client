import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from '../actions/pet_actions'

import unicornImage from "../../img/unicorn.png"

class PetState extends Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    let url = 'https://res.cloudinary.com/sedwin/image/upload/v1540837604/';
    return (
      <div>
        <div className="p-4 col-12">
          <div className="row">
            <div className="col-1 animated slideInLeft">health</div>
            <div className="col-1 animated fadeIn"><img src={`${url}${this.props.pet.health}.png`} alt="" className="state" /></div>
          </div>

          <div className="row">
            <div className="col-1 animated slideInLeft">hunger</div>
            <div className="col-1 animated fadeIn"><img src={`${url}${this.props.pet.hunger}.png`} alt="" className="state" /></div>
          </div>

          <div className="row">
            <div className="col-1 animated slideInLeft">mood</div>
            <div className="col-1 animated fadeIn"><img src={`${url}${this.props.pet.mood}.png`} alt="" className="state" /></div>
          </div>

          <div className="row">
            <div className="col-1 animated slideInLeft">rest</div>
            <div className="col-1 animated fadeIn"><img src={`${url}${this.props.pet.rest}.png`} alt="" className="state" /></div>
          </div>

          <div className="row">
            <div className="col-1 animated slideInLeft">active </div>
            <div className="col-1 animated fadeIn">{this.props.pet.active ? 'true' : 'false'}</div>
          </div>
        </div>
        <div className="row justify-content-md-center animated zoomInDown">
          <img style={{ height: 350 }} src={unicornImage} alt="" />
        </div>
        <div className="row justify-content-md-center p-4 font-weight-bold animated fadeIn">{this.props.pet.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { load },
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(PetState);