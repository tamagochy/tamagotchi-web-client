import {api, credentials} from "../api";
import alertify from 'alertify.js'

export const load = () => dispatch => {
  dispatch({
    type: 'PET_LOADING'
  });
  api.base.get('/pet', credentials())
    .then(res => {
      dispatch({
        type: 'PET_LOADED',
        data: res.data.data
      })
    }).catch(() => {
    dispatch({
      type: 'PET_LOADING_ERROR'
    });
  });
};

export const create = (name) => dispatch => {
  const data = {name};
  api.base.post('/pet/create', data, credentials())
    .then(res => {
      dispatch({
        type: 'PET_LOADED',
        data: res.data.data
      })
    }).catch(() => {
    dispatch({
      type: 'PET_CREATE_ERROR'
    })
  })
};

export const feed = () => dispatch => {
  dispatch({
    type: 'PET_FEEDING'
  });
  api.base.put('/pet/feed', null, credentials())
    .then(res => {
      dispatch({
        type: 'PET_FEEDED',
        data: res.data.data
      })
    }).catch(() => {
    dispatch({
      type: 'PET_FEEDING_ERROR'
    });
  });
};

export const play = (param) => dispatch => {
  dispatch({
    type: 'PET_PLAYING'
  });

  const data = {
    "action": `${param}`
  };
  api.base.put('/pet/play', data, credentials())
    .then(res => {
      dispatch({
        type: 'PET_HAD_PLAYED',
        data: res.data.data
      })
    }).catch(() => {
    dispatch({
      type: 'PET_PLAYING_ERROR'
    });
  });
};

export const sleep = () => dispatch => {
  dispatch({
    type: 'PET_SLEEP'
  });
  api.base.put('/pet/sleep', null, credentials())
    .then(res => {
      dispatch({
        type: 'PET_SLEEPING',
        data: res.data.data
      })
    }).catch(() => {
    dispatch({
      type: 'PET_SLEEPING_ERROR'
    });
  });
};

export const treat = () => dispatch => {
  dispatch({
    type: 'PET_TREATING'
  });
  api.base.put('/pet/treat', null, credentials())
    .then(res => {
      dispatch({
        type: 'PET_TREATED',
        data: res.data.data
      })
    }).catch(() => {
    dispatch({
      type: 'PET_TREATING_ERROR'
    });
  });
};

export const login = (login, password) => dispatch => {
  const data = {login, password};
  api.auth.post('/login', data).then(res => {
    dispatch({
      type: 'AUTH_SUCCESS',
      data: res.data.data
    });
  }).catch(reason => {
    dispatch({
      type: 'AUTH_FAILED',
      data: reason.response.data.errors
    })
  });
};

export const switchLoginMode = () => dispatch => {
  dispatch({
    type: 'LOGIN_MODE_SWITCHED'
  })
};

export const logout = () => dispatch => {
  localStorage.removeItem('jwt');
  dispatch({
    type: 'LOGOUT_SUCCESS'
  })
};

export const register = (login, password, email) => dispatch => {
  const data = {login, password, passwordConfirm: password, email};
  api.auth.post('/registration', data)
    .then(() => {
      alertify.success('Регистрация прошла успешно, теперь можно войти!');
      dispatch({
        type: 'REGISTRATION_SUCCESS'
      });
    })
    .catch(() => {
      alertify.error('Что-то пошло не так... Наверное, стоит повторить попытку');
      dispatch({
        type: 'REGISTRATION_ERROR'
      });
    });
};
