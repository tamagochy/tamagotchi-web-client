import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {register} from "../actions";
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

  toLogin = () => this.props.history.push('/');

  render() {
    return (
      <div className="custom-form animated slideInDown">
        <h2 className="custom-form-header">Расскажи о себе немного</h2>
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
                     className={"form-control" + (this.state.login.invalid ? " is-invalid" : "")}
                     value={this.state.login.value}
                     onChange={this.onChangeLogin}
                     required/>
              <div className="invalid-feedback">Необходимо указать свое имя</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12 mb-2">
              <input type="text"
                     placeholder="Введи свой email"
                     className={"form-control" + (this.state.email.invalid ? " is-invalid" : "")}
                     value={this.state.email.value}
                     onChange={this.onChangeEmail}
                     required/>
              <div className="invalid-feedback">Необходимо указать свой email</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12 mb-2">
              <input type="password"
                     placeholder="Придумай длинный пароль"
                     className={"form-control" + (this.state.password.invalid ? " is-invalid" : "")}
                     value={this.state.password.value}
                     onChange={this.onChangePassword}
                     required/>
              <div className="invalid-feedback">Некорректный пароль</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12 mb-4">
              <input type="password"
                     placeholder="Повтори пароль ещё раз"
                     className={"form-control" + (this.state.confirmPassword.invalid ? " is-invalid" : "")}
                     value={this.state.confirmPassword.value}
                     onChange={this.onChangeConfirmPassword}
                     required/>
              <div className="invalid-feedback">Некорректный пароль</div>
            </div>
          </div>
          <div className="form-row mb-3">
            <div className="col text-center">
              {this.props.loading ? (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Загрузка...</span>
                </div>
              ) : (
                <button className="btn btn-primary w-100" type="button" onClick={this.onRegister}>
                  Зарегистрироваться
                </button>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="col text-center">
              <button className="btn btn-secondary w-100" type="button" onClick={this.toLogin}>
                Вернуться назад
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorized: state.authorized,
  loading: state.registerLoading,
  error: state.registerError
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {register},
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
