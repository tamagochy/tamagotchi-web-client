import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from '../actions'

import unicornImage from "../../img/sparkle.png";

class PetState extends Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    if (!this.props.petExists) {
      return '';
    }
    let url = 'https://res.cloudinary.com/sedwin/image/upload/v1540837604/';
    return (
      <div>
        <div className="p-4 col-12">
          <div className="col-2">
            <div className="row">
              <div className="col-6 animated slideInLeft">Здоровье</div>
              <div className="col-5 animated fadeIn"><img src={`${url}${this.props.pet.health}.png`} alt="" className="state" /></div>
            </div>

            <div className="row">
              <div className="col-6 animated slideInLeft">Голод</div>
              <div className="col-5 animated fadeIn"><img src={`${url}${this.props.pet.hunger}.png`} alt="" className="state" /></div>
            </div>

            <div className="row">
              <div className="col-6 animated slideInLeft">Настроение</div>
              <div className="col-5 animated fadeIn"><img src={`${url}${this.props.pet.mood}.png`} alt="" className="state" /></div>
            </div>
            <div className="row">
              <div className="col-6 animated slideInLeft">Отдых</div>
              <div className="col-5 animated fadeIn"><img src={`${url}${this.props.pet.rest}.png`} alt="" className="state" /></div>
            </div>
          </div>
          <div className="row justify-content-md-center animated zoomInDown">
            <img style={{ height: 350 }} src={unicornImage} alt="" />
          </div>
          <div className="row justify-content-md-center p-4 font-weight-bold animated fadeIn">{this.props.pet.name}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet,
  petExists: state.petExists
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {load},
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(PetState);
