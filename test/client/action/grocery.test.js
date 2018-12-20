import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  getAllItems, addItem, updateItem, deleteItem, toggleBuy, resetGroceryState
} from '../../../web/src/actions/grocery';
import {
  FETCH_ALL_ITEMS,
  BASE_URL,
  ADD_NEW_ITEM,
  ADD_NEW_ITEM_FAILURE,
  UPDATE_ITEM,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM,
  BUYING_ITEM,
  BUYING_ITEM_ERROR,
  RESET_GROCERY_STATE
} from '../../../web/src/const';

const item = { _id: '1', name: 'Milk', amount: '1230' };
const mockStore = configureStore([thunk]);

describe('grocery', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should fetch all item', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery`, {
      status: 200,
      response: { items: [item] }
    });

    const expectedAction = { type: FETCH_ALL_ITEMS, items: [item] };
    const store = mockStore();

    store.dispatch(getAllItems()).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should add new item', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery`, {
      status: 200,
      response: { data: { item } }
    });

    const expectedAction = { type: ADD_NEW_ITEM, item };
    const store = mockStore();

    store.dispatch(addItem(item)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should not add item with error', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery`, {
      status: 401,
      response: {
        error: [{ name: ['Name is required.'] }]
      }
    });

    const expectedAction = { type: ADD_NEW_ITEM_FAILURE, error: [{ name: ['Name is required.'] }] };
    const store = mockStore();

    store.dispatch(addItem(item)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should update item', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery/1`, {
      status: 200,
      response: { data: { item } }
    });

    const expectedAction = { type: UPDATE_ITEM, item };
    const store = mockStore();

    store.dispatch(updateItem(item)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should not update item with error', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery/1`, {
      status: 401,
      response: {
        error: [{ name: ['Name is required.'] }]
      }
    });

    const expectedAction = { type: UPDATE_ITEM_FAILURE, error: [{ name: ['Name is required.'] }] };
    const store = mockStore();

    store.dispatch(updateItem(item)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should delete item', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery/1`, {
      status: 200,
      response: { data: { item } }
    });

    const expectedAction = { type: DELETE_ITEM, id: '1' };
    const store = mockStore();

    store.dispatch(deleteItem(item._id)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should buy item', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery/1`, {
      status: 200,
      response: { data: { item } }
    });

    const expectedAction = { type: BUYING_ITEM, itemId: '1' };
    const store = mockStore({ grocery: { items: [item] } });

    store.dispatch(toggleBuy(item._id)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });

  it('should not buy item that does not exist', (done) => {
    moxios.stubRequest(`${BASE_URL}/grocery/1`, {
      status: 404,
      response: { error: { name: ['Item does not exist'] } }
    });

    const expectedAction = { type: BUYING_ITEM_ERROR, error: { name: ['Item does not exist'] } };
    const store = mockStore({ grocery: { items: [item] } });

    store.dispatch(toggleBuy(item._id)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      done();
    });
  });
});

it('should reset grocery state', (done) => {
  const expectedAction = { type: RESET_GROCERY_STATE };
  const store = mockStore();
  expect(store.dispatch(resetGroceryState())).toEqual(expectedAction);
  done();
});
