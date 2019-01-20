import alertify from 'alertify.js'

const initialState = {};

export default function pet(state = initialState, action) {
  switch (action.type) {
    case 'PET_LOADED':
      return action.data;
    case 'PET_FEEDED':
      alertify.success('Вкуснятина');
      return action.data;
    case 'PET_FEEDING_ERROR':
      alertify.error('Я не голодна');
      return state;
    case 'PET_PLAYING_ERROR':
      alertify.error('Я больше не хочу играть');
      return state;
    case 'PET_HAD_PLAYED':
      alertify.success('Крууууть');
      return action.data;
    case 'PET_SLEEPING_ERROR':
      alertify.success('Я не хочу спать, давай лучше играть');
      return state;
    case 'PET_TREATED':
      alertify.success('Ура! Мне гораздо лучше');
      return action.data;
    case 'PET_TREATING_ERROR':
      alertify.error('Я полностью здорова');
      return state;
    case 'LOGOUT_SUCCESS':
      return initialState;
    default:
      return state;
  }
};
