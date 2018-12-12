import axios from 'axios';
import { FETCH_ALL_ITEMS, BASE_URL } from '../const';

const fetchAllItems = items => ({ type: FETCH_ALL_ITEMS, items });

export const getAllItems = () => dispatch => axios.get(`${BASE_URL}/grocery`).then(({ data: { data } }) => {
  dispatch(fetchAllItems(data));
});

export const addItem = () => (dispatch) => {};
export const updateItem = () => (dispatch) => {};
