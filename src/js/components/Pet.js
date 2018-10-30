import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from '../actions/pet_actions'

class Pet extends Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div>
        <div className="row justify-content-md-center">
          <img style={{ height: 350 }} src="https://res.cloudinary.com/sedwin/image/upload/v1540844694/unicorn.png" alt="" />
        </div>
        <div className="row justify-content-md-center p-4 font-weight-bold">{this.props.pet.name}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pet: state.pet
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { load },
  dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(Pet);