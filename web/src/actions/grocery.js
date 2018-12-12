import axios from 'axios';
import {
  FETCH_ALL_ITEMS,
  BASE_URL,
  ADD_NEW_ITEM,
  ADD_NEW_ITEM_FAILURE,
  RESET_GROCERY_STATE
} from '../const';

const fetchAllItems = items => ({ type: FETCH_ALL_ITEMS, items });
const addNewItem = item => ({ type: ADD_NEW_ITEM, item });
const addNewItemFailure = error => ({ type: ADD_NEW_ITEM_FAILURE, error });
const reset = () => ({ type: RESET_GROCERY_STATE });

export const getAllItems = () => dispatch => axios.get(`${BASE_URL}/grocery`).then(({ data: { items } }) => dispatch(fetchAllItems(items)));

export const addItem = item => dispatch => axios
  .post(`${BASE_URL}/grocery`, item)
  .then(({ data: { data: { item } } }) => {
    dispatch(addNewItem(item));
  })
  .catch(({ response: { data: { error } } }) => dispatch(addNewItemFailure(error)));

export const updateItem = () => (dispatch) => {};

export const resetGroceryState = () => dispatch => dispatch(reset());
