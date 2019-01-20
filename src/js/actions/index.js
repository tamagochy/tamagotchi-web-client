import {api, credentials} from "../api";
import alertify from 'alertify.js';
import history from '../util/history';

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
    }).catch((err) => {
    dispatch({
      type: 'PET_LOADING_ERROR'
    });
    if (err.response.data.errors[0].code === 'business.PetNotExists') {
      history.push('/create');
    }
  });
};

export const create = (name) => dispatch => {
  const data = {name};
  api.base.post('/pet/create', data, credentials())
    .then(res => {
      dispatch({
        type: 'PET_LOADED',
        data: res.data.data
      });
      history.push('/home');
    }).catch(() => {
    dispatch({
      type: 'PET_CREATE_ERROR'
    })
  })
};

export const feed = (action, room) => dispatch => {
  dispatch({
    type: 'PET_FEEDING'
  });
  const data = {
    action,
    room
  };
  api.base.put('/pet/feed', data, credentials())
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

export const play = (action, room) => dispatch => {
  dispatch({
    type: 'PET_PLAYING'
  });

  const data = {
    action,
    room
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

export const treat = (action, room) => dispatch => {
  dispatch({
    type: 'PET_TREATING'
  });
  const data = {
    action,
    room
  };
  api.base.put('/pet/treat', data, credentials())
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

export const changeRoom = (room) => dispatch => {
  dispatch({
    type: 'ROOM_CHANGED',
    room
  })
};

export const loadActions = () => dispatch => {
  api.base.get('/actions', credentials())
    .then((res) => {
      dispatch({
        type: 'ACTIONS_LOADED',
        actions: res.data.data
      });
    })
};

export const toggleMenu = () => dispatch => {
  dispatch({
    type: 'MENU_TOGGLED'
  })
};

export const loadTopPlayers = () => dispatch => {
  api.competition.get('/getTopPlayers', credentials())
    .then(res => {
      dispatch({
        type: 'TOP_PLAYERS_LOADED',
        data: res.data.data
      })
    })
};

export const goHome = () => {
  history.push('/home');
};

export const leaveTopPlayers = () => dispatch => {
  dispatch({
    type: 'TOP_PLAYERS_LEAVE'
  });
  goHome();
};

export const goTopPlayers = () => {
  history.push('/top');
};
