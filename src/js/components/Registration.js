import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {register, switchLoginMode} from "../actions";
import {connect} from "react-redux";

class Registration extends Component {
  state = {
    login: {
      value: '',
      invalid: false
    },
    email: {
      value: '',
      invalid: false
    },
    password: {
      value: '',
      invalid: false
    },
    confirmPassword: {
      value: '',
      invalid: false
    }
  };

  onChangeLogin = e => this.setState({login: {value: e.target.value, invalid: false}});

  onChangeEmail = e => this.setState({email: {value: e.target.value, invalid: false}});

  onChangePassword = e => this.setState({password: {value: e.target.value, invalid: false}});

  onChangeConfirmPassword = e => this.setState({confirmPassword: {value: e.target.value, invalid: false}});

  onRegister = () => {
    let valid = true;
    if (!this.state.login.value) {
      this.setState({login: {invalid: true}});
      valid = false;
    }
    if (!this.state.email.value) {
      this.setState({email: {invalid: true}});
      valid = false;
    }
    if (!this.state.password.value) {
      this.setState({password: {invalid: true}});
      valid = false;
    }
    if (!this.state.confirmPassword.value) {
      this.setState({confirmPassword: {invalid: true}});
      valid = false;
    }
    if (this.state.password.value !== this.state.confirmPassword.value) {
      this.setState({confirmPassword: {invalid: true}});
      valid = false;
    }
    if (valid) {
      this.props.register(this.state.login.value, this.state.password.value, this.state.email.value);
    }
  };

  onSwitch = () => this.props.switchLoginMode();

  render() {
    if (!this.props.show) {
      return '';
    }
    return (
      <div className="login animated slideInDown">
        <h2 className="login-header">Расскажи о себе немного</h2>
        <form className="login-container">
          <p>
            <input type="text" placeholder="Введи свое имя"
                   value={this.state.login.value}
                   onChange={this.onChangeLogin}/>
          </p>
          <p>
            <input type="email" placeholder="Введи свой email"
                   value={this.state.email.value}
                   onChange={this.onChangeEmail}/>
          </p>
          <p>
            <input type="password" placeholder="Придумай длинный пароль"
                   value={this.state.password.value}
                   onChange={this.onChangePassword}/>
          </p>
          <p>
            <input type="password" placeholder="Повтори пароль ещё раз"
                   value={this.state.confirmPassword.value}
                   onChange={this.onChangeConfirmPassword}/>
          </p>
          <p>
            <a className='login-link' onClick={this.onRegister}>Зарегестрироваться</a>
          </p>
          <hr/>
          <p>
            <a className='login-link' onClick={this.onSwitch}>Войти</a>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorized: state.authorized,
  show: !state.loginMode
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {register, switchLoginMode},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
