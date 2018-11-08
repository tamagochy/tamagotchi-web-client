import axios from 'axios';

const url = 'http://192.168.99.100:8085/';
const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0MiwibmJmIjoxNTM5MjAyMDk1LCJleHAiOjE4MDAwMDAwMDB9._5aczWEPOBnqIs3s2_Hk6uIInp-0-cb_I7CU5QVxhwU'
  }
});

export const load = () => dispatch => {
  dispatch({
    type: 'PET_LOADING'
  });
  api.get(`${url}pet`)
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

export const feed = () => dispatch => {
  dispatch({
    type: 'PET_FEEDING'
  });
  api.put(`${url}pet/feed`)
    .then(res => {
      dispatch({
        type: 'PET_FEEDED',
        data: res.data.data
      })
    }).catch(reason => {
      dispatch({
        type: 'PET_FEEDING_ERROR'
      });
    });
};

export const play = (param) => dispatch => {
  dispatch({
    type: 'PET_PLAYING'
  });
  api.put(`${url}pet/play`,
  {
    "action": `${param}`
  })
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
  api.put(`${url}pet/sleep`)
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
  api.put(`${url}pet/treat`)
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