import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from '../actions'
import Indicator from './Indicator';

import unicornImage from "../../img/sparkle.png";

class PetState extends Component {

  componentDidMount() {
    this.props.load();
    this.timer = setInterval(()=> this.props.load(), 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  render() {
    if (!this.props.petExists) {
      return '';
    }
    return (
      <div>
        <div className="p-4 col-12">
          <div className="col-2">
            <Indicator name='Здоровье' value={this.props.pet.health}/>
            <Indicator name='Голод' value={this.props.pet.hunger}/>
            <Indicator name='Настроение' value={this.props.pet.mood}/>
            <Indicator name='Отдых' value={this.props.pet.rest}/>
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
