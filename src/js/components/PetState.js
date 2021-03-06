import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {describeDisease, load} from '../actions'
import Indicator from './Indicator';

import unicornImage from "../../img/sparkle.png";

class PetState extends Component {

  componentDidMount() {
    this.props.load();
    this.setState({
      pollTimer: setInterval(() => this.props.load(), 10000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.pollTimer);
  }

  showHealthIndicator = () => this.props.pet.disease != null;

  healthIndicatorHandler = () => this.props.describeDisease(this.props.pet.disease);

  render() {
    return (
      <div>
        <div className="col-12">
          <div className="col-3">
            <Indicator name='Здоровье' value={this.props.pet.health}
                       showIndicator={this.showHealthIndicator()}
                       indicatorHandler={this.healthIndicatorHandler}/>
            <Indicator name='Голод' value={this.props.pet.hunger}/>
            <Indicator name='Настроение' value={this.props.pet.mood}/>
            <Indicator name='Отдых' value={this.props.pet.rest}/>
          </div>
          <div className="row justify-content-md-center animated zoomInDown">
            <img style={{height: 300}} src={unicornImage} alt=""/>
          </div>
          <div className="row justify-content-md-center p-4 font-weight-bold animated fadeIn">
            {this.props.pet.name} (Счет: {this.props.pet.score})
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {load, describeDisease},
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(PetState);
