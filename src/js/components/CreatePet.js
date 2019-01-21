import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {create, logout} from "../actions";
import {connect} from "react-redux";

class CreatePet extends Component {
  state = {
    name: {
      value: '',
      invalid: false
    }
  };

  onChangeName = e => this.setState({name: {value: e.target.value, invalid: false}});

  onCreate = () => {
    let valid = true;

    if (!this.state.name.value) {
      this.setState({name: {invalid: true}});
      valid = false;
    }

    if (valid) {
      this.props.create(this.state.name.value);
    }
  };

  render() {
    return (
      <div className="custom-form animated slideInDown">
        <h2 className="custom-form-header">Придумай имя своему питомцу</h2>
        <form className="p-2" noValidate>
          <div className="form-row">
            <div className="col-12 mb-4">
              <input type="text"
                     placeholder="Имя питомца"
                     className={"form-control" + (this.state.name.invalid ? " is-invalid" : "")}
                     value={this.state.name.value}
                     onChange={this.onChangeName}
                     required/>
              <div className="invalid-feedback">Необходимо придумать имя своему питомцу</div>
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col text-center">
              <button className="btn btn-primary w-100" type="button" onClick={this.onCreate}>Создать</button>
            </div>
          </div>
          <div className="form-row">
            <div className="col text-center">
              <button className="btn btn-danger w-100" type="button" onClick={this.props.logout}>Выйти</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {create, logout},
  dispatch
);

export default connect(null, mapDispatchToProps)(CreatePet);
