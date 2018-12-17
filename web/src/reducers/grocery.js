import {
  FETCH_ALL_ITEMS,
  ADD_NEW_ITEM,
  ADD_NEW_ITEM_FAILURE,
  RESET_GROCERY_STATE,
  DELETE_ITEM,
  UPDATE_ITEM,
  UPDATE_ITEM_FAILURE,
  BUYING_ITEM_ERROR,
  BUYING_ITEM
} from '../const';

const findIndex = (items, itemId) => items.findIndex(item => item._id === itemId);

const updateItem = (items, newItem) => {
  const newItems = [...items];
  newItems[findIndex(items, newItem._id)] = newItem;
  return newItems;
};

const toggleBuying = (items, itemId) => {
  const newItems = [...items];
  const itemIndex = findIndex(items, itemId);
  newItems[itemIndex].purchased = !newItems[itemIndex].purchased;
  return newItems;
};

export default (state = {}, action) => {
  const { type } = action;
  const { items } = state;

  switch (type) {
    case ADD_NEW_ITEM:
      return { ...state, type, items: [...state.items, action.item] };
    case DELETE_ITEM:
      return { ...state, type, items: state.items.filter(item => item._id !== action.id) };
    case FETCH_ALL_ITEMS:
      return { ...state, type, items: action.items };
    case BUYING_ITEM:
      return { ...state, type, items: toggleBuying(items, action.itemId) };
    case UPDATE_ITEM:
      return { ...state, type, items: updateItem(items, action.item) };
    case BUYING_ITEM_ERROR:
    case ADD_NEW_ITEM_FAILURE:
    case UPDATE_ITEM_FAILURE:
      return { ...state, type, error: action.error };
    case RESET_GROCERY_STATE:
      return { ...state, type };
    default:
      return state;
  }
};
