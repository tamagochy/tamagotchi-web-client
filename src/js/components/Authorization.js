import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {login, switchLoginMode} from "../actions";
import {connect} from "react-redux";

class Authorization extends Component {
  state = {
    login: {
      value: '',
      isInvalid: false
    },
    password: {
      value: '',
      isInvalid: false
    }
  };

  componentDidUpdate() {
    this.checkAuthorizationAndRedirect();
  }

  componentDidMount() {
    this.checkAuthorizationAndRedirect();
  }

  checkAuthorizationAndRedirect() {
    if (this.props.authorized) {
      this.props.history.push('/home');
    }
  }

  onChangeLogin = e => this.setState({login: {value: e.target.value, isInvalid: false}});

  onChangePassword = e => this.setState({password: {value: e.target.value, isInvalid: false}});

  onLogin = () => {
    let valid = true;
    if (!this.state.login.value) {
      this.setState({login: {isInvalid: true}});
      valid = false;
    }
    if (!this.state.password.value) {
      this.setState({password: {isInvalid: true}});
      valid = false;
    }
    if (valid) {
      this.props.login(this.state.login.value, this.state.password.value);
    }
  };

  onSwitch = () => this.props.switchLoginMode();

  render() {
    if (!this.props.show) {
      return '';
    }
    return (
      <div className="login animated slideInDown">
        <h2 className="login-header">Представься, пожалуйста</h2>
        <form className="login-container">
          <p>
            <input type="email" placeholder="Введи свое имя"
                   value={this.state.login.value}
                   onChange={this.onChangeLogin}/>
          </p>
          <p>
            <input type="password" placeholder="А пароль помнишь?"
                   value={this.state.password.value}
                   onChange={this.onChangePassword}/>
          </p>
          <p>
            <a className='login-link' onClick={this.onLogin}>Войти</a>
          </p>
          <hr/>
          <p>
            <a className='login-link' onClick={this.onSwitch}>Регистрация</a>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorized: state.authorized,
  show: state.loginMode
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {login, switchLoginMode},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
