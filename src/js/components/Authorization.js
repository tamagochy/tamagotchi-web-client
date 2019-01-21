import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {login} from "../actions";
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

  goRegister = () => this.props.history.push('/register');

  render() {
    return (
      <div className="custom-form animated slideInDown">
        <h2 className="custom-form-header">Представься, пожалуйста</h2>
        <form className="p-2" noValidate>
          {this.props.error ? (
            <div className="alert alert-danger" role="alert">
              {this.props.error}
            </div>
          ) : ''}
          <div className="form-row">
            <div className="col-12 mb-2">
              <input type="text"
                     placeholder="Введи свое имя"
                     className={"form-control" + (this.state.login.isInvalid ? " is-invalid" : "")}
                     value={this.state.login.value}
                     onChange={this.onChangeLogin}
                     required/>
              <div className="invalid-feedback">Нужно сначала указать свое имя</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12 mb-4">
              <input type="password"
                     placeholder="А пароль помнишь?"
                     className={"form-control" + (this.state.password.isInvalid ? " is-invalid" : "")}
                     value={this.state.password.value}
                     onChange={this.onChangePassword}
                     required/>
              <div className="invalid-feedback">Без пароля войти нельзя, увы</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col text-center">
              {this.props.loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Загрузка...</span>
                </div>
              ) : (
                <button className="btn btn-primary w-100" type="button" onClick={this.onLogin}>Войти</button>
              )}
            </div>
          </div>
          <hr/>
          <div className="form-row">
            <div className="col text-center">
              <button className="btn btn-secondary w-100" type="button" onClick={this.goRegister}>Регистрация</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorized: state.authorized,
  loading: state.loginLoading,
  error: state.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {login},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
