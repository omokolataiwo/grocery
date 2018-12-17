import axios from 'axios';
import {
  FETCH_ALL_ITEMS,
  BASE_URL,
  ADD_NEW_ITEM,
  ADD_NEW_ITEM_FAILURE,
  RESET_GROCERY_STATE,
  DELETE_ITEM,
  UPDATE_ITEM,
  UPDATE_ITEM_FAILURE,
  BUYING_ITEM,
  BUYING_ITEM_ERROR
} from '../const';

const fetchAllItems = items => ({ type: FETCH_ALL_ITEMS, items });
const addNewItem = item => ({ type: ADD_NEW_ITEM, item });
const addNewItemFailure = error => ({ type: ADD_NEW_ITEM_FAILURE, error });
const removeItem = item => ({ type: DELETE_ITEM, id: item._id });
const reset = () => ({ type: RESET_GROCERY_STATE });
const onUpdateItem = item => ({ type: UPDATE_ITEM, item });
const onUpdateItemError = error => ({ type: UPDATE_ITEM_FAILURE, error });
const onToggleBuy = itemId => ({ type: BUYING_ITEM, itemId });
const onToggleBuyError = error => ({ type: BUYING_ITEM_ERROR, error });

export const getAllItems = () => dispatch => axios.get(`${BASE_URL}/grocery`).then(({ data: { items } }) => dispatch(fetchAllItems(items)));

export const addItem = item => dispatch => axios
  .post(`${BASE_URL}/grocery`, item)
  .then(({ data: { data: { item } } }) => {
    dispatch(addNewItem(item));
  })
  .catch(({ response: { data: { error } } }) => dispatch(addNewItemFailure(error)));

export const updateItem = item => dispatch => axios
  .put(`${BASE_URL}/grocery/${item._id}`, item)
  .then(() => dispatch(onUpdateItem(item)))
  .catch(({ response: { data: { error } } }) => dispatch(onUpdateItemError(error)));

export const deleteItem = itemId => dispatch => axios.delete(`${BASE_URL}/grocery/${itemId}`).then(({ data: { data: { item } } }) => {
  dispatch(removeItem(item));
});

export const toggleBuy = itemId => (dispatch, getState) => {
  const { items } = getState().grocery;
  const item = items.find(item => item._id === itemId);

  return axios
    .put(`${BASE_URL}/grocery/${itemId}`, { purchased: !item.purchased })
    .then(() => dispatch(onToggleBuy(itemId)))
    .catch(({ response: { data: { error } } }) => dispatch(onToggleBuyError(error)));
};

export const resetGroceryState = () => dispatch => dispatch(reset());
