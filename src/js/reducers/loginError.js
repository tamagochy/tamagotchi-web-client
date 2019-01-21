const initialState = null;

export default function loginError(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return initialState;
    case 'AUTH_FAILED':
      return "Не удалось войти, что-то пошло не так...";
    default:
      return state;
  }
};
