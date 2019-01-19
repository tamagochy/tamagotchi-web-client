import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {create, goHome} from "../actions";
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
      <div className="login animated slideInDown">
        <h2 className="login-header">Придумай имя своему питомцу</h2>
        <form className="login-container">
          <p>
            <input type="text" placeholder="Имя питомца"
                   value={this.state.name.value}
                   onChange={this.onChangeName}/>
          </p>
          <p>
            <a className='login-link' onClick={this.onCreate}>Создать</a>
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {create, goHome},
  dispatch
);

export default connect(null, mapDispatchToProps)(CreatePet);
