import alertify from 'alertify.js'

const initialState = [];

export default function pet(state = initialState, action) {
  switch (action.type) {
    case 'PET_LOADED':
      alertify.success('im here, master');
      return action.data;
    case 'PET_FEEDED':
      alertify.success('yummy');
      return action.data;
    case 'PET_FEEDING_ERROR':
      alertify.error('im not hungry, bruh');
      return state;
    case 'PET_PLAYING_ERROR':
      alertify.error('dont play with me, bud');
      return state;
    case 'PET_HAD_PLAYED':
      alertify.success('coooool');
      return action.data;
    // case 'PET_SLEEPING':
    //   alertify.success('i dont wanna sleep anymore')
    //   return action.data;
    case 'PET_SLEEPING_ERROR':
      alertify.success('i dont wanna sleep anymore')
      return state;
    case 'PET_TREATED':
      alertify.success('flcl');
      return action.data;
    case 'PET_TREATING_ERROR':
      alertify.error('im healthy af')
    default:
      return state;
  }
};