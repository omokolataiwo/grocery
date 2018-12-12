import {
  FETCH_ALL_ITEMS, ADD_NEW_ITEM, ADD_NEW_ITEM_FAILURE, RESET_GROCERY_STATE
} from '../const';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case ADD_NEW_ITEM:
      return { ...state, type, items: [...state.items, action.item] };
    case ADD_NEW_ITEM_FAILURE:
      return { ...state, type, error: action.error };
    case FETCH_ALL_ITEMS:
      return { ...state, type, items: action.items };
    case RESET_GROCERY_STATE:
      return { ...state, type };
    default:
      return state;
  }
};
