import { FETCH_ALL_ITEMS } from '../const';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_ALL_ITEMS:
      return { ...state, type, items: action.items };
    default:
      return state;
  }
};
