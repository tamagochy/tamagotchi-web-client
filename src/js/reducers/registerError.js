const initialState = null;

export default function registerError(state = initialState, action) {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      return initialState;
    case 'REGISTRATION_ERROR':
      return "Не удалось зарегистрироваться, что-то пошло не так...";
    default:
      return state;
  }
};
